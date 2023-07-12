import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import CartContext from "../../cart-context/cart-context";

const Cart = () => {
  const { cartState, userId } = useContext(CartContext);

  const handleDelete = async (product) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/d840d45ef0fe46ab805426538cf292d1/${userId}/${product._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error.message);
      }

      cartState.removeFromCart(product);
    } catch (error) {
      alert(error.message);
    }
  };

  const cartItems = cartState.cart.map((product) => (
    <tr key={product._id}>
      <td>
        <img
          src={product.imageUrl}
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
        <Button
          variant="danger"
          style={{ marginLeft: "10px" }}
          onClick={() => handleDelete(product)}
        >
          REMOVE
        </Button>
      </td>
    </tr>
  ));

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
          {cartState.totalCostOfItems}
        </span>
      </h2>
    </>
  );
};

export default Cart;
