import React from "react";

import mealsImage from "../../assests/meals.jpg";
import classes from "./Header.module.css"

const Header = props => {

  return (<React.Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <buuton>Cart</buuton>
    </header>
    <div className={classes['main-image']}><img src={mealsImage} alt="A table full of delicious food!"/></div>
  </React.Fragment>

)
}

export default Header;