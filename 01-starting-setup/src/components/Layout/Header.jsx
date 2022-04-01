import { Fragment } from "react";
import mealImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeadeCartButton";

const Header = props =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage}></img>
            </div>
        </Fragment>

    )
}

export default Header;