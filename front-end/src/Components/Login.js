import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BOPLogo from "./BOPHub.MainLogo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
//import axios from 'axios';
import { NavigationBar } from "./NavigationBar";
import { useNavigate, useRouteError } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import "./Account.css";

export const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [errorShow, setErrorShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem("loginState", true);
    //localStorage.setItem('userObj', JSON.stringify(response.credential));
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    fetch("http://localhost:9000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        setUser(data, "userId");
        if (data.error) {
          console.log(data.error);
          setErrorShow(true);
          setErrorMsg(data.error);
          window.scrollTo(0, 0);
        } else {
          localStorage.setItem("loginState", true);
          navigate("/market-place");
          localStorage.setItem("userObj", JSON.stringify(data.user));
        }
      });
    console.log("Password: ", password);
    //window.location.href="/my-account";
  };

  const handleSignout = (e) => {
    setUser({});
    document.getElementById("loginButton").hidden = false;
    document.getElementById("registerButton").hidden = false;
  };

  return (
    <div>
      <NavigationBar />
      <Alert
        show={errorShow}
        variant="danger"
        dismissible
        onClose={() => setErrorShow(false)}
      >
        <Alert.Heading>Error!</Alert.Heading>
        <p>{errorMsg}</p>
      </Alert>

      <Container>
        <Row>
          <Col md={6}>
            <Image
              src={BOPLogo}
              className="img-fluid"
              height="650"
              width="650"
            ></Image>
          </Col>
          <Col className="mt-4">
            <Form>
              <Row className="text-center">
                <h4>Login with</h4>
                <hr></hr>
                <ButtonGroup size="sm">
                  <Button
                    variant="outline-secondary"
                    id="signInGoogle"
                    size="sm"
                  >
                    Google
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    Linkedin
                  </Button>
                  <Button variant="outline-secondary" size="sm">
                    Other
                  </Button>
                </ButtonGroup>
                <hr className="mt-3"></hr>
              </Row>
              <Row className="text-center">
                <h4>or</h4>
                <hr className="mt-3"></hr>
              </Row>
              <Form>
                <FloatingLabel
                  controlId="floatingEmailInput"
                  label="Email Address"
                  className="mb-3"
                  style={{ colr: "orange" }}
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingEmailInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
              </Form>
              <hr className="mt-2" />
              <Row className="">
                <Col>
                  <Form.Check
                    type="switch"
                    id="rememberMe"
                    label="Remember me"
                  ></Form.Check>
                </Col>
                <Col className="text-end">
                  <Button href="/forgot-password" variant="link">
                    Forgot password?
                  </Button>
                </Col>
              </Row>
              <Row>
                <Button
                  className="mt-2 mb-2 btn-custom-class"
                  variant="outline-secondary"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Login
                </Button>
                <h6>
                  Don't have an account?
                  <Button href="/register" variant="link">
                    Register
                  </Button>
                </h6>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
