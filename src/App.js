import React, { useState } from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import GenericHeader from "./components/Header/GenericHeader";
import Products from "./components/Products/Products";
import { CartContextWrapper } from "./cart-context/cart-context";

const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  return (
    <CartContextWrapper>
      <NavigationBar handleCartModal={handleCartModal} />
      <GenericHeader handleCartModal={handleCartModal} />
      <Products
        showCartModal={showCartModal}
        handleCartModal={handleCartModal}
      />
    </CartContextWrapper>
  );
};

export default App;
