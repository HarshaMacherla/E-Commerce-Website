import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const LoginPage = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvBSC-wnMSr4LTyhMGqXtQdczeBxPzacw",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error.message);
      }

      const data = await response.json();
      localStorage.setItem("token", JSON.stringify(data.idToken));
      props.setToken(data.idToken);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Card style={{ width: "720px", margin: "auto", marginTop: "20px" }}>
      <Card.Body>
        <h2 className="text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default LoginPage;
