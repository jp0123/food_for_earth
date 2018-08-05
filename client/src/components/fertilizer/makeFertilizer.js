import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const MakeFertilizer = () => {
  const title_1 = "Organic Fertilizer For All";
  const content_1 =
    "Does your household produce a lot of food waste? Why not compost it into fertiliser instead of letting it go to landfill?";
  const content_2 = "Get started by buying our smart compost bin!";

  const title_2 = "How it works";
  const stepOneTitle = "Step 1: Get Smart Bin";
  const stepOneBody =
    "Puchase our Smart Compost bin that allows you to dispose your organic waste in and generate fertilizer. It automatically sends a signal to us once it’s full.";
  const stepTwoTitle = "Step 2: Create your fertilizer";
  const stepTwoBody =
    "Expired food? Just chuck it into smart bin along with any other organic waste you have.";
  const stepThreeTitle = "Step 3: Give away your fertilizer";
  const stepThreeBody =
    "Once it’s full, the red LED light on top of the bin will turn on. Just push onto the road for collection. Someone will come and empty it. Bin can then be used to compost more waste.";

  return (
    <Container className="upper-space">
      {/* INFO */}
      <Row>
        <Col sm="12" md="6" className="justify-container">
          <div className="info-container">
            <div>
              <h3>{title_1}</h3>
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
          <div class="images-container">
            <img
              className="img-fluid info-images"
              src="/images/organic-waste-1.jpg"
              alt="Fertilizer"
            />
          </div>
        </Col>
      </Row>

      {/* HOW IT WORKS */}
      <Row>
        <Container className="upper-space">
          <h2 className="text-style-1">{title_2}</h2>
          <Row>
            <Col sm="12" md="4">
              <div className="images-container">
                <img
                  className="img-fluid"
                  src="/images/step-1.jpg"
                  alt="Step One"
                />
              </div>
              <p className="text-style-1">{stepOneTitle}</p>
              <p className="text-style-2">{stepOneBody}</p>
            </Col>
            <Col sm="12" md="4">
              <div className="images-container">
                <img
                  className="img-fluid"
                  src="/images/step-2.jpg"
                  alt="Step Two"
                />
              </div>
              <p className="text-style-1">{stepTwoTitle}</p>
              <p className="text-style-2">{stepTwoBody}</p>
            </Col>
            <Col sm="12" md="4">
              <div className="images-container">
                <img
                  className="img-fluid"
                  src="/images/step-3.jpg"
                  alt="Step Three"
                />
              </div>
              <p className="text-style-1">{stepThreeTitle}</p>
              <p className="text-style-2">{stepThreeBody}</p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default MakeFertilizer;
