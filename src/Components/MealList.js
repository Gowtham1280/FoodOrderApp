import React, { useContext } from "react";
import CartContext from "./CartContext";
import MealForm from "./MealForm";
import classes from './MealList.module.css';

function MealList(props){

    const price=`$${props.price.toFixed(2)}`;
    const cartx=useContext(CartContext);
    const addToCartHandler=amount=>{
        cartx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
    
    return<li className={classes.meal}>
        <div>
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div> 
        </div>
        <div>
            <MealForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
}

export default MealList;