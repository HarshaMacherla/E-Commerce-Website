import React, { useState } from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { CartContextWrapper } from "./cart-context/cart-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import GenericHeader from "./components/Header/GenericHeader";

const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  return (
    <CartContextWrapper>
      <Router>
        <NavigationBar
          handleCartModal={handleCartModal}
          showCartModal={showCartModal}
        />
        <GenericHeader />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                handleCartModal={handleCartModal}
                showCartModal={showCartModal}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CartContextWrapper>
  );
};

export default App;
