import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const GetFertilizer = () => {
  const title = "Organic Fertilizer For All";
  const content_1 =
    "You can get free fertilizer from your community members. Check the map below to see where you can collect fertiliser in your area. Reduce food waste! Save the environment!";

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
