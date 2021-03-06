import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserService from "../../services/userService";
import './Login.css';

export default function Login({setIsLoggedIn, setToken, setUser}) {
  const userService = new UserService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInUser() {
    console.log(email);
    console.log(password);
    const user = await userService.signIn(email, password);
    console.log(user)
    if(user.status && user.token != null && user.user != null) {
      setUser(user.user)
      setIsLoggedIn(true);
      setToken(user.token);
    }
    console.log(user);
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <h1 style={{textAlign:"center"}}>Acucheck</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" 
            onClick={() => signInUser()}>
          Login
        </Button>
      </Form>
    </div>
  );
}