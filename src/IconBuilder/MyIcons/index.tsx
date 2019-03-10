import React, { useState } from "react";
import { Container, BodyText, Button } from "../ShareComponents";
import { imageList } from "../constants/images";
import { colors } from "../constants/colors";
import {
  CombinedIcon,
  ButtonContainer,
  MyIconRow,
  EditContainer
} from "./MyIconsComponents";
import { PoseGroup } from "react-pose";

type Props = {
  setComponent: () => void;
  setEdit: () => void;
};

const IconBuilder: React.SFC<Props> = ({ setComponent, setEdit }) => {
  setEdit(null);
  const [myIcons, setMyIcons] = useState(
    JSON.parse(localStorage.getItem("myIcons"))
  );
  const [selected, setSelected] = useState(null);

  const editButtonPush = () => {
    setEdit(selected);
    setComponent("builder");
  };

  return (
    <Container>
      <>
        {myIcons && myIcons.length > 0 && (
          <>
            <BodyText>My Icons</BodyText>
            <MyIconRow>
              {myIcons.map((icon, i) => (
                <div key={i}>
                  <CombinedIcon
                    color={colors[icon.iconColor]}
                    selected={selected === i}
                    onBlur={() => setSelected(null)}
                    onClick={() => setSelected(i)}
                  >
                    <img src={imageList[icon.iconImage]} />
                  </CombinedIcon>
                </div>
              ))}
            </MyIconRow>
            <ButtonContainer selected={selected !== null}>
              <Button onClick={() => setComponent("builder")}>
                Create Another!
              </Button>
            </ButtonContainer>
          </>
        )}
      </>
      <>
        {(!myIcons || myIcons.length === 0) && (
          <>
            <BodyText>
              It Doesn't look like you have any Icons. Click below to get
              started.
            </BodyText>
            <ButtonContainer>
              <Button onClick={() => setComponent("builder")}>
                Get Started!
              </Button>
            </ButtonContainer>
          </>
        )}
      </>
      <PoseGroup>
        {selected !== null && (
          <EditContainer key={"edit_button"}>
            <Button onClick={editButtonPush}>Edit Icon</Button>
          </EditContainer>
        )}
      </PoseGroup>
    </Container>
  );
};

export default IconBuilder;
