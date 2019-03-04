import React, { useState } from "react";
import styled from "styled-components";
import { colors, colorList } from "../../../constants/colors";

const ColorRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColorCircle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  margin: 5px 20px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: 2px solid ${props => (props.selected ? "#505050" : props.color)};

  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: rgba(80, 80, 80, 0.13) 0px 2px 2px 0px;
    margin-top: ${props => (props.selected ? "5px" : "2px")};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

type Props = {
  setIconColor: () => void;
};

const ColorRows: React.SFC<Props> = ({ setIconColor }) => {
  const [selected, setSelected] = useState(null);

  function circleClicked(color: string) {
    setSelected(color);
    setIconColor(color);
  }

  return (
    <>
      <ColorRow>
        {colorList.map(color => (
          <ColorCircle
            key={color}
            color={colors[color]}
            onClick={() => circleClicked(color)}
            selected={selected && colors[color] === colors[selected]}
          />
        ))}
      </ColorRow>
    </>
  );
};

export default ColorRows;
