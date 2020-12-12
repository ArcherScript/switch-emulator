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

const TileContainer = styled.div`
  height: 345px;
  width: 345px;
  background-color: #eeeeee;
  border: solid 4px #f5f5f5;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const ActiveContainer = styled.div`
  border: ${props => props.active ? 'solid' : ''} 4px rgb(49, 221, 205);
  animation: ${props => props.active ? pulse : ''} 1s infinite;
  margin: 7px;
`;

const Tile = props => {
  return (
    <ActiveContainer active={props.active}>
      <TileContainer>
        <div></div>
      </TileContainer>
    </ActiveContainer>
  );
};

export default Tile;
