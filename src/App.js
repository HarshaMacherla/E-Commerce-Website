import React from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./components/Products/ProductDetails";
import GenericHeader from "./components/Header/GenericHeader";
import LoginPage from "./pages/LoginPage";
import CartContext from "./cart-context/cart-context";

const App = () => {
  const { isLoggedIn } = React.useContext(CartContext);

  return (
    <>
      <NavigationBar />
      <GenericHeader />
      <Switch>
        <Route path="/" exact>
          {isLoggedIn && <Products />}
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
          {!isLoggedIn && <LoginPage />}
          {isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/:productId" exact>
          <ProductDetails />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
