import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Progress,
  Col
} from "reactstrap";

const BinIndexItem = ({ bin }) => {
  const button_text = "More";

  const user = bin.user;
  const address = bin.location.address;
  const latitude = bin.location.latitude;
  const longitude = bin.location.longitude;
  const progress = bin.progress;

  return (
    <Col sm="12" md="4">
      <div className="upper-space">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Smart Compost Bin"
          />
          <CardBody>
            <CardTitle>{user}</CardTitle>
            <Progress color="warning" value={progress} />
            <div className="text-center mb-3">{progress}%</div>
            <CardSubtitle className="mb-3">{address}</CardSubtitle>
            <CardSubtitle className="mb-3">Latitude:{latitude}</CardSubtitle>
            <CardSubtitle className="mb-3">Longitude:{longitude}</CardSubtitle>
            <div className="mt-3">
              <Button className="button-style-two">{button_text}</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default BinIndexItem;
