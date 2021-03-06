import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { AccountBox } from "../accountBox";

const NavbarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#ffffff"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 17px;
  color: #c6007e;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.9);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #000;
`;

export function Navbar(props) {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo logoSize={100}/>
      <AccessibilityContainer>
        {!isMobile && <AnchorLink to="/customer/access/signin">Privat</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Seperator />}
        <Marginer direction="horizontal" margin={10} />
        <Link to="/customer/access/signup">
          <Button size={14}>Företag</Button>
        </Link>
        <Marginer direction="horizontal" margin={8} />
        {!isMobile && <Seperator />}
        <Marginer direction="horizontal" margin={8} />
        <AnchorLink to="/customer/access/signin">Mina Sidor</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
