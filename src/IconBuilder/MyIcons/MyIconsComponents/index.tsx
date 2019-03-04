import styled from "styled-components";

export const CombinedIcon = styled.button`
  border-radius: 99px;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.color};
  height: 50px;
  width: 50px;
  margin: 5px 20px;
  line-height: 0;
  transition: all 0.15s ease-in-out;
  border: 2px solid ${props => props.color};

  &:hover {
    margin-top: 1px;
    margin-bottom: 9px;
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
  display: block;
  margin-top: 30px;
`;

export const MyIconRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
`;
