import React from "react";

const CartContext = React.createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = React.useState([])

  function add(item) {
    const newProductsCart = productsCart

    const id = newProductsCart.find((product) => product === item)

    if(!id) newProductsCart.push(item)
    
    setProductsCart(newProductsCart)
  }

  function remove(item) {
    let newProductsCart = productsCart.filter((product) => product !== item)

    setProductsCart(newProductsCart)
  }
  const store = {
    productsCart,
    add,
    remove
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  );
}

  export function useCart() {
    const context = React.useContext(CartContext);

    const {
      productsCart,
      add,
      remove
    } = context

    return {
      productsCart,
      add,
      remove
    }
  }
