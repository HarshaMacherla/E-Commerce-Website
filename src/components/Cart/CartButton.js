import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../cart-context/cart-context";

const CartButton = (props) => {
  const { cartState } = useContext(CartContext);

  const countStyling = {
    marginLeft: "8px",
    backgroundColor: "#404040",
    borderRadius: "5px",
    padding: "2px 5px",
  };

  return (
    <>
      <Button variant="secondary" onClick={props.handleCartModal}>
        Cart <span style={countStyling}>{cartState.totalItemsInCart}</span>
      </Button>
    </>
  );
};

export default CartButton;
