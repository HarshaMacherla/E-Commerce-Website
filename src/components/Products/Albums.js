import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import productsArr from "./ProductsArray";
import CartContext from "../../cart-context/cart-context";

const Albums = () => {
  const { cartState, userId } = React.useContext(CartContext);

  const handleClick = async (product) => {
    const index = cartState.cart.findIndex(
      (item) => item.name === product.name
    );
    if (index !== -1) {
      alert("ITEM ALREADY EXISTS IN THE CART");
      return;
    }

    try {
      const response = await fetch(
        `https://crudcrud.com/api/d840d45ef0fe46ab805426538cf292d1/${userId}`,
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error.message);
      }

      const createdProduct = await response.json();
      const productId = createdProduct._id;
      cartState.addToCart({ _id: productId, ...product });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container fluid className="text-center">
      <h1 className="p-3" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Music
      </h1>
      <Container className="mt-2 vstack gap-5">
        <Row className="hstack no-gutters">
          <Col>
            <h2>Album 1</h2>
            <img src={productsArr[0].imageUrl} alt={productsArr[0].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[0].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  ...productsArr[0],
                  name: "Album 1",
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
          <Col>
            <h2>Album 2</h2>
            <img src={productsArr[1].imageUrl} alt={productsArr[1].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[1].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  ...productsArr[1],
                  name: "Album 2",
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
        <Row className="hstack gap-3 no-gutters">
          <Col>
            <h2>Album 3</h2>
            <img src={productsArr[2].imageUrl} alt={productsArr[2].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[2].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  ...productsArr[2],
                  name: "Album 3",
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
          <Col>
            <h2>Album 4</h2>
            <img src={productsArr[3].imageUrl} alt={productsArr[3].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[3].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  ...productsArr[3],
                  name: "Album 4",
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Albums;
