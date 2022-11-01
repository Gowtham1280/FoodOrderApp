import React, { useState } from 'react';
import Header from './Components/Headrer';
import Cart from './Components/Cart';
import Meals from './Components/Meals';
import CartProvider from './Components/CartProvider';

function App() {

  const [display,setDisplay]=useState(false);

  function onCloseHandler(){
   setDisplay(false);
  }

  function onShowHandler(){
    setDisplay(true);
   }
 
  return (
    <CartProvider>
       {display && <Cart onCloseHandler={onCloseHandler}/>}
       <Header onShowHandler={onShowHandler}/>
      <main>
          <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
