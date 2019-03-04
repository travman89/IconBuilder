import React, { useState } from "react";
import { Container, BodyText, Button } from "../ShareComponents";
import { imageList } from "../constants/images";
import { colors } from "../constants/colors";
import { CombinedIcon, ButtonContainer, MyIconRow } from "./MyIconsComponents";

type Props = {
  setComponent: () => void;
};

const IconBuilder: React.SFC<Props> = ({ setComponent }) => {
  const [myIcons, setMyIcons] = useState(
    JSON.parse(localStorage.getItem("myIcons"))
  );
  return (
    <Container>
      <>
        {myIcons && myIcons.length > 0 && (
          <>
            <BodyText>My Icons</BodyText>
            <MyIconRow>
              {myIcons.map((icon, i) => (
                <div key={i}>
                  <CombinedIcon color={colors[icon.iconColor]}>
                    <img src={imageList[icon.iconImage]} />
                  </CombinedIcon>
                </div>
              ))}
            </MyIconRow>
            <ButtonContainer>
              <Button onClick={() => setComponent("builder")}>
                Create Another!
              </Button>
            </ButtonContainer>
          </>
        )}
      </>
      <>
        {!myIcons && (
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
    </Container>
  );
};

export default IconBuilder;
