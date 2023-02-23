import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const ShowCartHandler = () => SetCartIsShown(true);
  const HideCartHandler = () => SetCartIsShown(false);

  return (
    <CartProvider>
     {cartIsShown && <Cart onHideCart={HideCartHandler}/>} 
      <Header onShowCart={ShowCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
