import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import CartContext from "../../cart-context/cart-context";

const Cart = (props) => {
  const { cartState } = useContext(CartContext);
  let totalCost = 0;

  const cartItems = cartState.cart.map((product) => {
    totalCost += product.price * product.quantity;
    return (
      <tr key={product.name}>
        <td>
          <img
            src={product.url}
            alt={product.title}
            width="100px"
            height="100px"
            style={{ marginRight: "10px" }}
          />
          <span>{product.name}</span>
        </td>
        <td>{product.price}</td>
        <td>
          <span className="border border-info p-2 border-2">
            {product.quantity}
          </span>
          <Button variant="danger" style={{ marginLeft: "10px" }}>
            REMOVE
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", verticalAlign: "middle" }}
      >
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </Table>
      <h2 style={{ textAlign: "right" }}>
        Total:{" "}
        <span style={{ fontWeight: "normal" }}>
          Rs.
          {totalCost}
        </span>
      </h2>
    </>
  );
};

export default Cart;
