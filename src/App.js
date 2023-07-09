import React, { useState } from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { CartContextWrapper } from "./cart-context/cart-context";
import { Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import GenericHeader from "./components/Header/GenericHeader";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./components/Products/ProductDetails";

const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  return (
    <CartContextWrapper>
      <NavigationBar
        handleCartModal={handleCartModal}
        showCartModal={showCartModal}
      />
      <GenericHeader />
      <Switch>
        <Route path="/" exact>
          <Products
            handleCartModal={handleCartModal}
            showCartModal={showCartModal}
          />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contactus" exact>
          <ContactUs />
        </Route>
        <Route path="/:productId" exact>
          <ProductDetails />
        </Route>
      </Switch>
    </CartContextWrapper>
  );
};

export default App;
