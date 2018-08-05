import React from "react";
import { Container } from "reactstrap";

const Content = () => {
  const content_header = "Join the movement!";
  const content_body = "Let's recycle and reuse more.";

  return (
    <div className="content-container upper-space">
      <Container>
        <p className="content-header">{content_header}</p>
        <p className="content-body">{content_body}</p>
      </Container>
    </div>
  );
};

export default Content;
