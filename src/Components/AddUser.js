import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("User Added ", result.insertedId);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    e.target.reset();
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className="container">
      <div className="nav">
        <Link className="btn btn-primary" to={"/"}>
          Home
        </Link>
        <Link className="btn btn-primary" to={"/user/add"}>
          Add User
        </Link>
      </div>
      <h1>Please Add An User</h1>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleBlur}
              type="text"
              name="name"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleBlur}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
