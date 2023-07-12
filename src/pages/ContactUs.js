import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
    };

    try {
      const response = await fetch(
        "https://e-commerce-contact-form-3e1d9-default-rtdb.firebaseio.com/contactus.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error.message);
      }

      alert("Form Submitted Successfully");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Card className="p-5 mx-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            ref={nameRef}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your mobile number"
            ref={mobileRef}
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default ContactUs;
