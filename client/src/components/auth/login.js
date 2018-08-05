import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center mt-3">Login page</h2>
        <Form>
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
          <div className="text-center">
            <Button>Login</Button>
          </div>
        </Form>
      </Container>
    );
  }
}
