import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const sotredUser = useLoaderData();
  const [user, setUser] = useState(sotredUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/users/update/${sotredUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...sotredUser};
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h3>Please Update : {user.name}</h3>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              defaultValue={user.name}
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={sotredUser.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Update;
