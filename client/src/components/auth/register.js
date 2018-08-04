import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

export default class Register extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center mt-3">Register page</h2>
        <Form>
          {/* Name */}
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Your name" />
          </FormGroup>
          {/* Email */}
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Your email"
            />
          </FormGroup>
          {/* Password */}
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="userPassword"
              placeholder="Your password"
            />
          </FormGroup>
          {/* Address */}
          <FormGroup>
            <Label for="name">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
            />
          </FormGroup>
          <div className="text-center">
            <Button>Register</Button>
          </div>
        </Form>
      </Container>
    );
  }
}
