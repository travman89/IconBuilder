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
  edit: number;
};

const StyledButton = styled(Button)`
  display: block;
  margin-top: 40px;
`;

function checkEdit(edit, key) {
  if (edit !== null) {
    return JSON.parse(localStorage.getItem("myIcons"))[edit][key];
  }
  return null;
}
const IconBuilder: React.SFC<Props> = ({ setComponent, edit }) => {
  const [iconColor, setIconColor] = useState(checkEdit(edit, "iconColor"));
  const [iconImage, setIconImage] = useState(checkEdit(edit, "iconImage"));

  function assembleIcon() {
    let customIcons = JSON.parse(localStorage.getItem("myIcons"));
    if (!customIcons) {
      customIcons = [];
    }
    if (edit !== null) {
      customIcons[edit] = { iconColor: iconColor, iconImage: iconImage };
    } else {
      customIcons.push({ iconColor: iconColor, iconImage: iconImage });
    }
    localStorage.setItem("myIcons", JSON.stringify(customIcons));
    setComponent("home");
  }

  return (
    <Container>
      <BodyText>Select a color.</BodyText>
      <IconRows setIconColor={setIconColor} iconColor={iconColor} />
      <PoseGroup>
        {iconColor && (
          <PoseItem key={"ImageSelect"}>
            <BodyText style={{ paddingTop: "25px" }}>
              {" "}
              Select an image.
            </BodyText>
            <ImageRows setIconImage={setIconImage} iconImage={iconImage} />
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
