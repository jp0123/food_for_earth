import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  const display = "Food For Earth";
  const content_1 = "Recycle. Reuse. Do good.";
  const call_to_action = "See more";

  return (
    <div>
      <Jumbotron className="hero">
        <Container>
          <h1 className="display-3">{display}</h1>
          <p>{content_1}</p>
          <hr className="my-2" />
          <Link to="/">
            <Button size="lg" color="primary">
              {call_to_action}
            </Button>
          </Link>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;