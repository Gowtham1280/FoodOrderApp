import React, {useRef } from "react";
import Input from './Input';
import classes from './MealForm.module.css';
function MealForm(props){

   const amountInputref=useRef();

   function onsubmitHandler(event){
      event.preventDefault();
      const enterdAmount=amountInputref.current.value;
      const enteredAmountNumber=+enterdAmount;
      
      if(enterdAmount.trim().length=== 0 || enteredAmountNumber<1){
         return;
      }
      
     props.onAddToCart(enteredAmountNumber);
   };
   
   return <form className={classes.form} onSubmit={onsubmitHandler}>
   <Input
       ref={amountInputref}
       label='Amount'
       input={{
           id: 'amount',
           type: 'number',
           min: '1',
           max: '5',
           step: '1',
           defaultValue: '1',
          }}
       />
     <button >+ Add</button>
   </form>

}

export default MealForm;
