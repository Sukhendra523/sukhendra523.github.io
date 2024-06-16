import React, { useState } from "react";
import styled from "styled-components";
import GitHubButtonContainer from "./GitHubButtonContainer";



  // ${({isMobileMenuOpened})=>{
  //   if(isMobileMenuOpened){
  //     return {'flex-direction': "column",
  //       "position": "absolute",
  //       "margin-top": "30px",
  //       "background": "black",
  //       "width": "100%",
  //       "left": 0,
  //       "padding": "1rem",
  //       "opacity": .9
  //     }
  //   }}
  // }

const NavMenuList = styled.ul`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  gap: 32px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
  }
  &.mobile-menu {
    flex-direction: column;
    position: absolute;
    top: 80px;
    background: ${({ theme }) => theme.card_light };
    width: 100%;
    left: 0;
    padding: 1rem;
    opacity: .9;
    transition: all 0.6s ease-in-out;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    z-index:9;
  }

`;

const NavItem = styled.a`
  &:hover{
    color : ${({theme})=>theme.primary}
  }
`;

const NavMenuContainer = ({ isMobileView , isMobileMenuOpened ,navLinkClickHandler }) => {
    const isRenderMobileView = isMobileView && isMobileMenuOpened;
    const renderMenu = (isRenderMobileView || !isMobileView);

  return (
    renderMenu && 
      <NavMenuList className={isRenderMobileView?'mobile-menu':''}>
        <NavItem onClick={navLinkClickHandler} href="#About">About</NavItem>
        <NavItem onClick={navLinkClickHandler} href="#Skills">Skills</NavItem>
        <NavItem onClick={navLinkClickHandler} href="#Experience">Experience</NavItem>
        <NavItem onClick={navLinkClickHandler} href="#Projects">Projects</NavItem>
        <NavItem onClick={navLinkClickHandler} href="#Education">Education</NavItem>
        {isMobileView && <GitHubButtonContainer isRenderMobileView={isRenderMobileView}/>}
      </NavMenuList>
   
  );
};

export default NavMenuContainer;
