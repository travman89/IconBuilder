import React, { useState } from "react";
import styled from "styled-components";
import { imageList } from "../../../constants/images";

const ImageRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(80, 80, 80, 0.05);
  border-radius: 4px;
  padding: 10px;
`;

const TestImg = styled.img`
  height: 40px;
  width: 40px;
  padding: 10px;
  margin: 0 auto;
`;

const ImageButton = styled.button`
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  margin: 0px 10px;

  transition: all 0.25s ease-in-out;
  &:hover {
    border: 2px solid
      ${props => (props.selected ? "#505050" : "rgba(80, 80, 80, 0.1)")};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
  border: 2px solid ${props => (props.selected ? "#505050" : "transparent")};
`;

type Props = {
  setIconImage: () => void;
};

const ImageRows: React.SFC<Props> = ({ setIconImage }) => {
  const [selected, setSelected] = useState(null);

  function imageClicked(image: number) {
    setSelected(image);
    setIconImage(image);
  }

  return (
    <>
      <ImageRow>
        {imageList.map((img, i) => (
          <ImageButton
            key={i}
            onClick={() => imageClicked(i)}
            selected={selected === i}
          >
            <TestImg src={img} />
          </ImageButton>
        ))}
      </ImageRow>
    </>
  );
};

export default ImageRows;
