import React from "react";
import Hero from "./landing/hero";
import CallToAction from "./landing/callToAction";
import OnlineStore from "./landing/onlineStore";
import Content from "./landing/content";

export default () => {
  return (
    <div>
      <Hero />
      <CallToAction />
      <Content />
      <OnlineStore />
    </div>
  );
};
