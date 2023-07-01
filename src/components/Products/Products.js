import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import productsArr from "./ProductsArray";

const Products = (props) => {
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
            <Button>Add to Cart</Button>
          </Col>
          <Col>
            <h2>Album 2</h2>
            <img src={productsArr[1].imageUrl} alt={productsArr[1].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[1].price}</p>
            <Button>Add to Cart</Button>
          </Col>
        </Row>
        <Row className="hstack gap-3 no-gutters">
          <Col>
            <h2>Album 3</h2>
            <img src={productsArr[2].imageUrl} alt={productsArr[2].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[2].price}</p>
            <Button>Add to Cart</Button>
          </Col>
          <Col>
            <h2>Album 4</h2>
            <img src={productsArr[3].imageUrl} alt={productsArr[3].title} />
            <p style={{ fontWeight: "bold" }}>Rs.{productsArr[3].price}</p>
            <Button>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      <Button
        className="btn-secondary m-5"
        style={{ color: "skyblue", fontWeight: "bold" }}
      >
        See the Cart
      </Button>
    </Container>
  );
};

export default Products;
