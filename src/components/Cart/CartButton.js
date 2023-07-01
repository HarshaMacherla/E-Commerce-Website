import React from "react";
import { Button } from "react-bootstrap";

const CartButton = (props) => {
  return (
    <>
      <Button variant="secondary" onClick={props.handleCartModal}>
        Cart
      </Button>
    </>
  );
};

export default CartButton;
