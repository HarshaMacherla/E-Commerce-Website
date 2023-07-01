import React, { useState } from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import GenericHeader from "./components/Header/GenericHeader";
import Products from "./components/Products/Products";

const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };
  return (
    <>
      <NavigationBar handleCartModal={handleCartModal} />
      <GenericHeader handleCartModal={handleCartModal} />
      <Products
        showCartModal={showCartModal}
        handleCartModal={handleCartModal}
      />
    </>
  );
};

export default App;
