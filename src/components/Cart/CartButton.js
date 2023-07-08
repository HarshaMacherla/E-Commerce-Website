import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../cart-context/cart-context";

const CartButton = (props) => {
  const { cartState } = useContext(CartContext);

  return (
    <>
      <Button variant="secondary" onClick={props.handleCartModal}>
        {cartState.totalItemsCount > 0
          ? `Cart ${cartState.totalItemsCount}`
          : "Cart"}
      </Button>
    </>
  );
};

export default CartButton;
