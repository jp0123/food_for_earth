import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const OnlineStore = () => {
  const title = "Online Store";
  const body =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, explicabo tempore quo reiciendis facere recusandae sint veniam itaque a culpa rem, architecto esse delectus, blanditiis quia nemo vero nostrum molestiae.";

  return (
    <Container className="upper-space">
      <Row>
        <Col sm="12" md="6" className="justify-container">
          <div className="info-container">
            <div>
              <h3>{title}</h3>
              <p className="text-justify">{body}</p>
              <Link to="/store">
                <div className="button-container">
                  <Button className="button-style-two">Shop now</Button>
                </div>
              </Link>
            </div>
          </div>
        </Col>
        <Col sm="12" md="6">
          <div class="images-container">
            <img
              className="img-fluid info-images"
              src="/images/store.jpg"
              alt="Online store"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OnlineStore;
