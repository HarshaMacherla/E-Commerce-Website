import React from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (product) => {},
  totalItemsInCart: 0,
  totalCostOfItems: 0,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.item],
        totalItemsInCart: state.totalItemsInCart + 1,
        totalCostOfItems: state.totalCostOfItems + parseInt(action.item.price),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.item._id),
        totalItemsInCart: state.totalItemsInCart - 1,
        totalCostOfItems: state.totalCostOfItems - parseInt(action.item.price),
      };

    case "LOAD_CART":
      let totalItems = action.cartItems.length;
      let totalCost = 0;
      action.cartItems.forEach((item) => {
        totalCost += parseInt(item.price);
      });
      return {
        ...state,
        cart: action.cartItems,
        totalItemsInCart: totalItems,
        totalCostOfItems: totalCost,
      };

    default:
      return state;
  }
};

export const CartContextWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!localStorage.getItem("token")
  );
  const [userId, setUserId] = React.useState(localStorage.getItem("userId"));

  const [showCartModal, setShowCartModal] = React.useState(false);

  const handleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD", item: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE", item: product });
  };

  const [cartState, dispatch] = React.useReducer(cartReducer, {
    cart: [],
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    totalItemsInCart: 0,
    totalCostOfItems: 0,
  });

  React.useEffect(() => {
    fetch(`https://crudcrud.com/api/d840d45ef0fe46ab805426538cf292d1/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const cartItems = data.map((item) => ({
          _id: item._id,
          name: item.name,
          price: item.price,
          imageUrl: item.imageUrl,
          quantity: item.quantity,
        }));

        dispatch({ type: "LOAD_CART", cartItems });
      })
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        isLoggedIn,
        setIsLoggedIn,
        userId,
        setUserId,
        showCartModal,
        handleCartModal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
