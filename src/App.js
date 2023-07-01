import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import GenericHeader from "./components/Header/GenericHeader";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <>
      <NavigationBar />
      <GenericHeader />
      <Products />
    </>
  );
};

export default App;
