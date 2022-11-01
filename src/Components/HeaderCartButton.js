import React, { useContext } from 'react';
import CartIcon from './CartIcon';
import CartContext from './CartContext';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props){

    const cartctx=useContext(CartContext);

    const noOfCartItems=cartctx.items.reduce((previousValue, currentValue)=>{
        return previousValue+currentValue.amount;
    },0);
    
    return  <button className={classes.button} onClick={props.onShowHandler}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    your Cart
                </span>
                <span className={classes.badge}>
                    {noOfCartItems}
                </span>
            </button>
}

export default HeaderCartButton;