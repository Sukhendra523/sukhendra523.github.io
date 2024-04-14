import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import NavMenuContainer from "./NavMenuContainer";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { Bio } from "../../data/constants";
import GitHubButtonContainer from "./GitHubButtonContainer";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
`;


const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0px 6px;
  font-weight: 500;
  font-size: 2rem;
`;

const NavContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
  }

`

const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const LogoIcon = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 4rem;
`;

const NavBar = () => {
  const isMobileView = useMediaQuery("(max-width : 768px)");
  const theme = useTheme();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = ()=> setIsMobileMenuOpened((open)=>!open)
  const navLinkClickHandler = isMobileView ? toggleMobileMenu:null;



  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <LogoIcon>{"<"}</LogoIcon>
          {Bio.name.split(' ')[0]}
          <span style={{color: theme.primary}} >{' / '}</span>
          {Bio.name.split(' ')[1]}
          <LogoIcon>{">"}</LogoIcon>
        </NavLogo>
        
        <NavMenuContainer isMobileView={isMobileView} isMobileMenuOpened={isMobileMenuOpened} navLinkClickHandler={navLinkClickHandler}/>
        {isMobileView && <MobileIcon onClick={toggleMobileMenu}>
        <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>}
        {!isMobileView && <GitHubButtonContainer />}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
