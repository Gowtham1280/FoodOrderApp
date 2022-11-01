import React, { useContext } from "react";
import classes from './Cart.module.css';
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import Modal from "./Modal";

function Cart(props){

    const cartctx=useContext(CartContext);

    const Amount=cartctx.totalAmount.toFixed(2);

    const cartItemRemoveHandler=(id)=>{
        cartctx.removeItem(id);
    };

    const cartItemAddHandler=(item)=>{
        cartctx.addItem(item);
    };

    const cartItems=<ul className={classes['cart-items']}>{cartctx.items.map((item)=><CartItem onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} key={'c1'}amount={item.amount} name={item.name} price={item.price}/>)}</ul>

    return(<Modal onClick={props.onCloseHandler}>

        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{Amount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseHandler}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

    </Modal>
    );

};

export default Cart;








