import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";

const CartButton = (props) => {
  return (
    <>
      <Button>{props.value}</Button>
    </>
  );
};

export default CartButton;
