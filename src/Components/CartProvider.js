import React, { useReducer } from "react";
import CartContext from "./CartContext";

const CartProvider=(props)=>{

    const defaultCart={
        items:[],
        totalAmount:0,
    };

    const cartReducer=(state,action)=>{
        if(action.type==="ADD"){
            const updatedTotalAmount=state.totalAmount+(action.item.amount*action.item.price);
            const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
            const exsisxtingCartItem=state.items[existingCartItemIndex];
            let updatedItems;
            if(exsisxtingCartItem){
                const updatedItem={
                    ...exsisxtingCartItem,
                    amount:exsisxtingCartItem.amount+action.item.amount
                };
                updatedItems=[...state.items];
                console.log(updatedItems);
                updatedItems[existingCartItemIndex]=updatedItem;
            }else{
                updatedItems=state.items.concat(action.item);
            }
            return{
                items:updatedItems,
                totalAmount:updatedTotalAmount
            };
        }
        if(action.type==='Remove'){
            const exsisxtingCartItemIndex=state.items.findIndex(item=>item.id===action.id);
            const exsisxtingCartItem=state.items[exsisxtingCartItemIndex];
            const updatedTotalAmount=state.totalAmount-exsisxtingCartItem.price;
            let updateItems;
            if(exsisxtingCartItem.amount===1){
                updateItems=state.items.filter(things=>things.id !==action.id);
            }else{
                const updatedItem={...exsisxtingCartItem,amount:exsisxtingCartItem.amount-1};
                updateItems=[...state.items];
                updateItems[exsisxtingCartItemIndex]=updatedItem;
            }
            return{
                items:updateItems,
                totalAmount:updatedTotalAmount
            }
        }
        return defaultCart;
    };

    const [cartState,dispatchCart]=useReducer(cartReducer,defaultCart);

    const addItemToCartHandler=item=>{
        dispatchCart({type:'ADD',item:item});
    };
    const removeItemFromCartHandler=(id)=>{
        dispatchCart({type:'Remove',id:id});
    };
    const cartcontext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartcontext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;