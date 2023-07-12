import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import products from "../../store/Products/Products";
import CartContext from "../../cart-context/cart-context";
import { NavLink } from "react-router-dom";

const OnlineProducts = () => {
  const { cartState, userId } = useContext(CartContext);

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
        Products
      </h1>
      <Container className="mt-2 vstack gap-5">
        <Row className="hstack no-gutters">
          <Col>
            <NavLink to="/product1" className="nav-link">
              <h2 className="nav-heading">Product 1</h2>

              <img
                src={products[0].imageUrl}
                width="320px"
                height="360px"
                alt={products[0].title}
              />
            </NavLink>
            <p style={{ fontWeight: "bold" }}>Rs.{products[0].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  name: products[0].name,
                  title: products[0].title,
                  url: products[0].imageUrl,
                  price: products[0].price,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
          <Col>
            <NavLink to="/product2" className="nav-link">
              <h2 className="nav-heading">Product 2</h2>

              <img
                src={products[1].imageUrl}
                alt={products[1].title}
                width="320px"
                height="360px"
              />
            </NavLink>
            <p style={{ fontWeight: "bold" }}>Rs.{products[1].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  name: products[1].name,
                  title: products[1].title,
                  url: products[1].imageUrl,
                  price: products[1].price,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
        <Row className="hstack gap-3 no-gutters">
          <Col>
            <NavLink to="/product3" className="nav-link">
              <h2 className="nav-heading">Product 3</h2>

              <img
                src={products[2].imageUrl}
                alt={products[2].title}
                width="320px"
                height="360px"
              />
            </NavLink>
            <p style={{ fontWeight: "bold" }}>Rs.{products[2].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  name: products[2].name,
                  title: products[2].title,
                  url: products[2].imageUrl,
                  price: products[2].price,
                })
              }
            >
              Add to Cart
            </Button>
          </Col>
          <Col>
            <NavLink to="/product4" className="nav-link">
              <h2 className="nav-heading">Product 4</h2>
              <img
                src={products[3].imageUrl}
                alt={products[3].title}
                width="320px"
                height="360px"
              />
            </NavLink>
            <p style={{ fontWeight: "bold" }}>Rs.{products[3].price}</p>
            <Button
              onClick={() =>
                handleClick({
                  name: products[3].name,
                  title: products[3].title,
                  url: products[3].imageUrl,
                  price: products[3].price,
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

export default OnlineProducts;
