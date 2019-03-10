import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 800px;
  padding: 50px;
  text-align: center;
`;

export const BodyText = styled.div`
  color: #505050;
  font-weight: 300;
  text-align: center;
  padding-bottom: 20px;
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 99px;
  border: 2px solid #505050;
  cursor: pointer;
  margin: 0 auto;
  padding: 10px;
  font-size: 14px;
  width: 150px;
  color: #505050;

  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: #505050;
    color: #eee9e6;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;
