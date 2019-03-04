import React, { useState } from "react";
import styled from "styled-components";
import { Container, BodyText, Button } from "../ShareComponents";
import IconRows from "./BuilderComponents/ColorRows";
import ImageRows from "./BuilderComponents/ImageRows";
import posed, { PoseGroup } from "react-pose";

const PoseItem = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 400, damping: 25 },
      default: { duration: 300 }
    }
  },
  exit: { opacity: 0, y: 150 }
});

type Props = {
  setComponent: () => void;
};

const StyledButton = styled(Button)`
  display: block;
  margin-top: 40px;
`;

const IconBuilder: React.SFC<Props> = ({ setComponent }) => {
  const [iconColor, setIconColor] = useState(null);
  const [iconImage, setIconImage] = useState(null);

  function assembleIcon() {
    let customIcons = JSON.parse(localStorage.getItem("myIcons"));
    if (!customIcons) {
      customIcons = [];
    }
    customIcons.push({ iconColor: iconColor, iconImage: iconImage });
    localStorage.setItem("myIcons", JSON.stringify(customIcons));
    setComponent("home");
  }

  return (
    <Container>
      <BodyText>Select a color.</BodyText>
      <IconRows setIconColor={setIconColor} />
      <PoseGroup>
        {iconColor && (
          <PoseItem key={"ImageSelect"}>
            <BodyText style={{ paddingTop: "25px" }}>
              {" "}
              Select an image.
            </BodyText>
            <ImageRows setIconImage={setIconImage} />
          </PoseItem>
        )}
        {iconImage != null && setIconImage && (
          <PoseItem key={"CreateButton"}>
            <StyledButton onClick={() => assembleIcon()}>Create!</StyledButton>
          </PoseItem>
        )}
      </PoseGroup>
    </Container>
  );
};

export default IconBuilder;
