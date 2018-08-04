import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const title_user_1 = "Make Fertilizer";
  const content_user_1 =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsam qui totam debitis autem saepe minus, excepturi doloribus facere molestiae error perferendis impedit sapiente in soluta? Minima quod quibusdam consectetur.";
  const title_user_2 = "Get Fertilizer";
  const content_user_2 =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsam qui totam debitis autem saepe minus, excepturi doloribus facere molestiae error perferendis impedit sapiente in soluta? Minima quod quibusdam consectetur.";

  return (
    <Container>
      <Row>
        <Col sm="12" md="6">
          <div className="images-container">
            <img
              className="img-fluid"
              src="/images/organic-waste-1.jpg"
              alt="Fertilizer producer"
            />
          </div>
          <h4 className="text-style-1">{title_user_1}</h4>
          <p className="text-style-2">{content_user_1}</p>
          <Link to="/make-fertilizer">
            <div className="button-container">
              <Button className="button-style-one">Details</Button>
            </div>
          </Link>
        </Col>
        <Col sm="12" md="6">
          <div className="images-container">
            <img
              className="img-fluid"
              src="/images/fertilizer-1.jpg"
              alt="Fertilizer user"
            />
          </div>
          <h4 className="text-style-1">{title_user_2}</h4>
          <p className="text-style-2">{content_user_2}</p>
          <Link to="/fertilizer">
            <div className="button-container">
              <Button className="button-style-one">Details</Button>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CallToAction;
