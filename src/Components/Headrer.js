import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import image from '../Components/img/meals.jpg';

function Header(props){

    return <React.Fragment>
        <header className={classes.header} >
            <h1>React Meals</h1>
            <HeaderCartButton onShowHandler={props.onShowHandler}/>
        </header>
        <div>
            <img src={image} alt='A table full of delicious food!' className={classes['main-image']}></img>
        </div>
    </React.Fragment>

}

export default Header;