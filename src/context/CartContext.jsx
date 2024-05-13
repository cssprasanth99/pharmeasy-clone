import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter((product) => product !== item));
  }

  return (
    <cartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, setCartItems }}
    >
      {children}
    </cartContext.Provider>
  );
};
