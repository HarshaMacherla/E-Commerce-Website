import React from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import productsArr from "./ProductsArray";
import Cart from "../Cart/Cart";

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
        variant="secondary"
        className="m-5"
        style={{ color: "skyblue", fontWeight: "bold" }}
        onClick={props.handleCartModal}
      >
        See the Cart
      </Button>
      <Modal show={props.showCartModal} onHide={props.handleCartModal}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Products;
