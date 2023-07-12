import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../cart-context/cart-context";

const NavigationBar = () => {
  const { isLoggedIn, setIsLoggedIn, showCartModal, handleCartModal } =
    React.useContext(CartContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar bg="dark" className="mx-0" variant="dark">
        <Container className="d-flex justify-content-between">
          <Nav className="mx-auto">
            <NavLink
              to="/home"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "larger",
                margin: "0px 10px",
                padding: "2px 5px",
              }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "larger",
                margin: "0px 10px",
                padding: "2px 5px",
              }}
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "larger",
                margin: "0px 10px",
                padding: "2px 5px",
              }}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contactus"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "larger",
                margin: "0px 10px",
                padding: "2px 5px",
              }}
            >
              CONTACT US
            </NavLink>
            {!isLoggedIn && (
              <NavLink
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "larger",
                  margin: "0px 10px",
                  padding: "2px 5px",
                }}
              >
                LOGIN
              </NavLink>
            )}
          </Nav>
          {isLoggedIn && (
            <CartButton
              showCartModal={showCartModal}
              handleCartModal={handleCartModal}
            />
          )}
          {isLoggedIn && (
            <Button
              variant="outline-secondary"
              className="mx-5"
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          )}
          <Modal show={showCartModal} onHide={handleCartModal}>
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
      </Navbar>
    </>
  );
};

export default NavigationBar;
