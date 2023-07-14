import React, { Suspense } from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./components/Products/ProductDetails";
import GenericHeader from "./components/Header/GenericHeader";
import LoginPage from "./pages/LoginPage";
import CartContext from "./cart-context/cart-context";

const App = () => {
  const { isLoggedIn } = React.useContext(CartContext);

  const Home = React.lazy(() => import("./pages/Home"));
  const About = React.lazy(() => import("./pages/About"));
  const ContactUs = React.lazy(() => import("./pages/ContactUs"));

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
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/about" exact>
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        </Route>
        <Route path="/contactus" exact>
          <Suspense fallback={<p>Loading...</p>}>
            <ContactUs />
          </Suspense>
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
