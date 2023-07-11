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
import LoginPage from "./pages/LoginPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("token"));

  const isLoggedIn = !!token;

  const handleCartModal = () => {
    setShowCartModal((prevState) => !prevState);
  };

  return (
    <CartContextWrapper>
      <NavigationBar
        handleCartModal={handleCartModal}
        showCartModal={showCartModal}
        isLoggedIn={isLoggedIn}
        setToken={setToken}
      />
      <GenericHeader />
      <Switch>
        <Route path="/" exact>
          {isLoggedIn && (
            <Products
              handleCartModal={handleCartModal}
              showCartModal={showCartModal}
            />
          )}
          {!isLoggedIn && <Redirect to="login" />}
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
        <Route path="/login" exact>
          {!isLoggedIn && <LoginPage setToken={setToken} />}
          {isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/:productId" exact>
          <ProductDetails />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </CartContextWrapper>
  );
};

export default App;
