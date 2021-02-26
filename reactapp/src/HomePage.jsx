import React from "react";
import { Row } from "antd";
import BottomContainer from "./components/BottomContainer";
import RightContainer from "./components/RightContainer";
import LeftContainer from "./components/LeftContainer";

const HomePage = () => {
  return (
    <div className="boxesOuterContainer">
      <Row justify="space-around">
        <LeftContainer />
        <RightContainer />
      </Row>
      <Row justify="center">
        <BottomContainer />
      </Row>
    </div>
  );
};

export default HomePage;
