import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.5px solid black;
  justify-content: space-between;
  padding: 20px 25px;
`;

const Okay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OKButton = styled.img`
  display: block;
  object-fit: cover;
`;

const OKText = styled.span`
  padding-left: 14px;
  font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src={require("./Switch.png")} />
      <Okay>
        <OKButton src={require("./AButton.png")} />
        <OKText>OK</OKText>
      </Okay>
    </FooterContainer>
  );
};

export default Footer;
