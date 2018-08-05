import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
  Container
} from "reactstrap";
export default class Store extends Component {
  render() {
    const product_bin_title = "Smart Compost Bin";
    const product_bin_price = "$20.00 AU";
    const product_fertilizer_title = "Organic Fertilizer";
    const product_fertilizer_price = "$2.50 AU";

    const button_text = "Buy";

    return (
      <Container>
        <Row className="upper-space">
          {/* Smart Compost Bin */}
          <Col sm="12" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="/images/step-1.jpg"
                alt="Smart Compost Bin"
              />
              <CardBody>
                <CardTitle>{product_bin_title}</CardTitle>
                <CardSubtitle className="mb-3">
                  {product_bin_price}
                </CardSubtitle>
                <div className="mt-3">
                  <Button className="button-style-two">{button_text}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Organic fertilizer */}
          <Col sm="12" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="/images/step-3.jpg"
                alt="Organic fertilizer"
              />
              <CardBody>
                <CardTitle>{product_fertilizer_title}</CardTitle>
                <CardSubtitle className="mb-3">
                  {product_fertilizer_price}
                </CardSubtitle>
                <div className="mt-3">
                  <Button className="button-style-two">{button_text}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
