import React, { useState } from "react";
import styled from "styled-components";
import MyIcons from "./MyIcons";
import Builder from "./Builder";
import posed, { PoseGroup } from "react-pose";

const PoseItem1 = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    delay: 50,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 35 },
      default: { duration: 300 }
    }
  },
  exit: { opacity: 0, x: "120vh" }
});

const PoseItem2 = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    delay: 50,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      default: { duration: 300 }
    }
  },
  exit: { opacity: 0, x: "-120vh" }
});

const AppContainer = styled.div`
  background-color: #eee9e6;
`;

const Heading = styled.div`
  font-size: 50px;
  font-weight: 200;
  margin: 0 auto;
  text-align: center;
  padding-top: 40px;
  color: #505050;
  line-height: 1;
  padding-bottom: 20px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #505050;
  width: 50%;
  margin: 0 auto;
`;

const IconBuilder: React.SFC = () => {
  const [component, setComponent] = useState("home");
  const [edit, setEdit] = useState(null);
  return (
    <AppContainer>
      <Heading>Icon Builder</Heading>
      <Separator />
      <PoseGroup>
        {component === "home" && (
          <PoseItem1 key={"MyIcons"}>
            <MyIcons setComponent={setComponent} setEdit={setEdit} />
          </PoseItem1>
        )}
        {component === "builder" && (
          <PoseItem2 key={"Builder"}>
            <Builder setComponent={setComponent} edit={edit} />
          </PoseItem2>
        )}
      </PoseGroup>
    </AppContainer>
  );
};

export default IconBuilder;
