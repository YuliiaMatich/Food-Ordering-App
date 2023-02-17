import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const ShowCartHandler = () => SetCartIsShown(true);
  const HideCartHandler = () => SetCartIsShown(false);

  return (
    <React.Fragment>
     {cartIsShown && <Cart onHideCart={HideCartHandler}/>} 
      <Header onShowCart={ShowCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
