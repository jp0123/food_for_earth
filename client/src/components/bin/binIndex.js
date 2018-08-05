import React from "react";
import BinIndexItem from "./binIndexItem";
import { Container, Row } from "reactstrap";

const BinsIndex = props => {
  const binsIndexItems = props.bins.map(bin => {
    return <BinIndexItem key={bin.user} bin={bin} />;
  });
  return (
    <Container>
      <Row>{binsIndexItems}</Row>
    </Container>
  );
};

export default BinsIndex;
