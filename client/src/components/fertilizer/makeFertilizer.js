import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const MakeFertilizer = () => {
  const title_1 = "Organic Fertilizer For All";
  const content_1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, explicabo tempore quo reiciendis facere recusandae sint veniam itaque a culpa rem, architecto esse delectus, blanditiis quia nemo vero nostrum molestiae.";
  const content_2 = "Get started by buying our smart compost bin!";

  const title_2 = "How it works";
  const stepOneTitle = "Step 1: Get Smart Bin";
  const stepOneBody =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui optio praesentium eaque error. Hic, tempora adipisci debitis enim quia quibusdam harum facilis exercitationem, laudantium sunt eos, non sit illo?";
  const stepTwoTitle = "Step 2: Build your fertilizer";
  const stepTwoBody =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui optio praesentium eaque error. Hic, tempora adipisci debitis enim quia quibusdam harum facilis exercitationem, laudantium sunt eos, non sit illo?";
  const stepThreeTitle = "Step 3: Give away your fertilizer";
  const stepThreeBody =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui optio praesentium eaque error. Hic, tempora adipisci debitis enim quia quibusdam harum facilis exercitationem, laudantium sunt eos, non sit illo?";

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
              src="http://via.placeholder.com/300x300"
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
                  src="http://via.placeholder.com/200x200"
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
                  src="http://via.placeholder.com/200x200"
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
                  src="http://via.placeholder.com/200x200"
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
