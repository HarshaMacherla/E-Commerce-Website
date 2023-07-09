import React from "react";
import { Button, Container } from "react-bootstrap";
import Albums from "../components/Products/Albums";
import OnlineProducts from "../components/Products/OnlineProducts";

const Products = (props) => {
  return (
    <Container>
      <div className="mb-5">
        <Albums />
      </div>
      <div className="mb-5">
        <OnlineProducts />
      </div>
      <Container className="d-flex justify-content-center">
        <Button
          variant="secondary"
          className="m-5"
          style={{
            color: "skyblue",
            fontWeight: "bold",
          }}
          onClick={props.handleCartModal}
        >
          See the Cart
        </Button>
      </Container>
    </Container>
  );
};

export default Products;
