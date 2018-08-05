import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const GetFertilizer = () => {
  const title = "Organic Fertilizer For All";
  const content_1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, explicabo tempore quo reiciendis facere recusandae sint veniam itaque a culpa rem, architecto esse delectus, blanditiis quia nemo vero nostrum molestiae.";

  const content_2 = "Want to buy some instead? Visit our store.";

  return (
    <Container className="upper-space">
      <Row>
        <Col sm="12" md="6" className="justify-container">
          <div className="info-container">
            <div>
              <h3>{title}</h3>
              <p className="text-justify">{content_1}</p>
              <p className="text-justify">{content_2}</p>
              <Link to="/store">
                <div className="button-container">
                  <Button className="button-style-one">Shop now</Button>
                </div>
              </Link>
            </div>
          </div>
        </Col>
        <Col sm="12" md="6">
          <div className="images-container">
            <img
              className="img-fluid info-images"
              src="/images/fertilizer-1.jpg"
              alt="Fertilizer"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetFertilizer;
