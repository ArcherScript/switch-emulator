import React from "react";
import styled from "styled-components";
import PlayerIcon from './PlayerIcon/PlayerIcon';
import Clock from "./Clock/Clock";


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const WifiContainer = styled.img`
  margin-left: 24px;
  margin-right: 24px;
`

const Header = (props) => {
  return (
    <HeaderContainer>
      <PlayerIcon active={props.active}/>
      <HeaderInfo>
        <Clock />
        <WifiContainer src={require("./Wifi.png")} />
        <img src={require("./Battery.png")} />
      </HeaderInfo>
    </HeaderContainer>
  );
};

export default Header;
