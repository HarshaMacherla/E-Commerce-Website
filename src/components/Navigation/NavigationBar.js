import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton";

const NavigationBar = (props) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              HOME
            </Nav.Link>
            <Nav.Link href="/" style={{ color: "white" }}>
              STORE
            </Nav.Link>
            <Nav.Link href="/" style={{ color: "white" }}>
              ABOUT
            </Nav.Link>
          </Nav>
          <CartButton value="Cart" />
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
