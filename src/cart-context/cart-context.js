import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const index = state.cart.findIndex(
        (item) => item.name === action.item.name
      );
      if (index === -1) {
        const newCartItems = [...state.cart, { ...action.item, quantity: 1 }];
        return {
          ...state,
          totalItemsCount: state.totalItemsCount + 1,
          cart: newCartItems.map((item) => item),
        };
      } else {
        const updatedCartItems = state.cart.map((item, idx) => {
          if (idx === index) {
            return {
              ...item,
              totalItemsCount: state.totalItemsCount + 1,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          totalItemsCount: state.totalItemsCount + 1,
          cart: updatedCartItems.map((item) => item),
        };
      }

    default:
      return state;
  }
};

export const CartContextWrapper = (props) => {
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD", item: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE", item: product });
  };

  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalItemsCount: 0,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
  });

  return (
    <CartContext.Provider value={{ cartState }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
