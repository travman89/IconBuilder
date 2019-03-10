import styled from "styled-components";
import posed from "react-pose";

export const CombinedIcon = styled.button`
  border-radius: 99px;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.color};
  height: 50px;
  width: 50px;
  margin: 8px 20px;
  line-height: 0;
  transition: all 0.15s ease-in-out;
  border: 2px solid ${props => props.color};
  ${props => props.selected && `border: 2px solid #505050`}
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  > img {
    height: 30px;
    width: 30px;
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  margin-top: 30px;
`;

export const MyIconRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
`;

export const EditButtonAnimation = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { ease: [0.0, 0.25, 0.5, 1] },
      x: { ease: [0.0, 0.25, 0.5, 1] },
      default: { duration: 200 }
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      opacity: { ease: [0.0, 0.25, 0.5, 1] },
      x: { ease: [0.0, 0.25, 0.5, 1] },
      default: { duration: 200 }
    }
  }
});

export const EditContainer = styled(EditButtonAnimation)`
  top: 40px;
  right: 100px;
  position: absolute;
`;
