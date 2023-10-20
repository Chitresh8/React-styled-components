import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid green;
  background-color: ${(props) =>
    props.variant === "outlined" ? "black" : "#4caf50"};
  color: ${(props) => (props.variant === "outlined" ? "aqua" : "ghostwhite")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "black" : "#4caf50"};
    color: ${(props) => (props.variant !== "outlined" ? "aqua" : "ghostwhite")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to top, orange, white, green);
  border: none;
  color: black;
  font-weight: bold;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 10px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "goldenrod" : "orange"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const rotate = keyframes`
from {
    transform:rotate(0deg);
}
to {
    transform:rotate(360deg);
}`;
export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 0.8s linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: 2px solid ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.primary};
`;
