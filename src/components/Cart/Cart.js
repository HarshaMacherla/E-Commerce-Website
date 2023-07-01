import React from "react";
import { Button, Table } from "react-bootstrap";
import productsArr from "../Products/ProductsArray";

const Cart = (props) => {
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
        <tbody>
          <tr>
            <td>
              <img
                src={productsArr[0].imageUrl}
                alt={productsArr[0].title}
                width="100px"
                height="100px"
                style={{ marginRight: "10px" }}
              />
              <span>Album 1</span>
            </td>
            <td>{productsArr[0].price}</td>
            <td>
              <span className="border border-info p-2 border-2">1</span>
              <Button variant="danger" style={{ marginLeft: "10px" }}>
                REMOVE
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="cart-img"
                src={productsArr[1].imageUrl}
                alt={productsArr[1].title}
                width="100px"
                height="100px"
                style={{ marginRight: "10px" }}
              />
              <span>Album 2</span>
            </td>
            <td>{productsArr[1].price}</td>
            <td>
              <span className="border border-info p-2 border-2">1</span>
              <Button variant="danger" style={{ marginLeft: "10px" }}>
                REMOVE
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={productsArr[2].imageUrl}
                alt={productsArr[2].title}
                width="100px"
                height="100px"
                style={{ marginRight: "10px" }}
              />
              <span>Album 3</span>
            </td>
            <td>{productsArr[2].price}</td>
            <td>
              <span className="border border-info p-2 border-2">1</span>
              <Button variant="danger" style={{ marginLeft: "10px" }}>
                REMOVE
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={productsArr[3].imageUrl}
                alt={productsArr[3].title}
                width="100px"
                height="100px"
                style={{ marginRight: "10px" }}
              />
              <span>Album 4</span>
            </td>
            <td>{productsArr[3].price}</td>
            <td>
              <span className="border border-info p-2 border-2">1</span>
              <Button variant="danger" style={{ marginLeft: "10px" }}>
                REMOVE
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <h2 style={{ textAlign: "right" }}>
        Total:{" "}
        <span style={{ fontWeight: "normal" }}>
          Rs.
          {productsArr[0].price +
            productsArr[1].price +
            productsArr[2].price +
            productsArr[3].price}
        </span>
      </h2>
    </>
  );
};

export default Cart;
