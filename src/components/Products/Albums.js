import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import productsArr from "./ProductsArray";
import CartContext from "../../cart-context/cart-context";

const Albums = () => {
  const { cartState } = useContext(CartContext);

  const handleClick = (product) => {
    cartState.addToCart(product);
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
                  name: "Album 1",
                  title: productsArr[0].title,
                  url: productsArr[0].imageUrl,
                  price: productsArr[0].price,
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
                  name: "Album 2",
                  title: productsArr[1].title,
                  url: productsArr[1].imageUrl,
                  price: productsArr[1].price,
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
                  name: "Album 3",
                  title: productsArr[2].title,
                  url: productsArr[2].imageUrl,
                  price: productsArr[2].price,
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
                  name: "Album 4",
                  title: productsArr[3].title,
                  url: productsArr[3].imageUrl,
                  price: productsArr[3].price,
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
