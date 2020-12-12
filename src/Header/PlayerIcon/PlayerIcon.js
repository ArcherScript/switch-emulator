import React from "react";
import styled, { keyframes } from "styled-components";
import img from "./me.jpg";

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

const PlayerIconContainer = styled.div`
  animation: ${pulse} 1s infinite;
  border: ${props => props.active ? 'solid' : ''} 4px rgb(49, 221, 205);
  border-radius: 50%;
  margin-right: 6px;
  margin-left: 6px;
`;

const PlayerIconPortrait = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 2px #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-image: url(${img});
  background-size: contain;
`;

const PlayerIcon = (props) => {
  return (
    <PlayerIconContainer active={props.active}>
      <PlayerIconPortrait />
      
    </PlayerIconContainer>
  );
};

export default PlayerIcon;
