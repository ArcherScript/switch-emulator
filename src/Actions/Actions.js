import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
 0% {
    border-color: rgb(49, 221, 205);
  }
  50% {
    border-color: rgb(115,232,220);
  }
  100% {
    border-color: rgb(49, 221, 205);
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const ActiveAction = styled.div`
  animation: ${pulse} 1s infinite;
  border: ${props => (props.active ? "solid" : "")} 4px rgb(49, 221, 205);
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
`;

const Actions = ({selectionGrid}) => {
  return (
    <ActionContainer>
      <ActiveAction active={selectionGrid[2][0]}>
        <Action>
          <img src={require("./Messages.png")} alt="Messages" />
        </Action>
      </ActiveAction>
      <ActiveAction active={selectionGrid[2][1]}>
        <Action>
          <img src={require("./Store.png")} alt="Nintendo Store" />
        </Action>
      </ActiveAction>
      <ActiveAction active={ selectionGrid[2][2]}>
        <Action>
          <img src={require("./Picture.png")} alt="Background" />
        </Action>
      </ActiveAction>
      <ActiveAction active={ selectionGrid[2][3]}>
        <Action>
          <img src={require("./Controller.png")} alt="Controller Settings" />
        </Action>
      </ActiveAction>
      <ActiveAction active={ selectionGrid[2][4]}>
        <Action>
          <img src={require("./Settings.png")} alt="Settings" />
        </Action>
      </ActiveAction>
      <ActiveAction active={ selectionGrid[2][5]}>
        <Action>
          <img src={require("./Power.png")} alt="Power" />
        </Action>
      </ActiveAction>
    </ActionContainer>
  );
};

export default Actions;
