import React from "react";
import { Button, Container } from "react-bootstrap";
import Albums from "../components/Products/Albums";
import OnlineProducts from "../components/Products/OnlineProducts";
import CartContext from "../cart-context/cart-context";

const Products = () => {
  const { handleCartModal } = React.useContext(CartContext);

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
          onClick={handleCartModal}
        >
          See the Cart
        </Button>
      </Container>
    </Container>
  );
};

export default Products;
