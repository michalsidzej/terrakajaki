import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Nav from 'components/Nav/Nav';
import FacebookSaleBanner from 'components/FacebookSaleBanner/FacebookSaleBanner'

const StyledHeaderWrapper = styled.header`
  height: 6rem;
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0px solid ${({ theme }) => theme.color.primary};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.light};
  position: fixed;
  z-index: 9998;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;
const HeaderTop = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({theme}) => theme.maxwidth};
    padding: 0 2rem;
  }
`;

const Menu = styled.nav`
  display: none;
  ${({theme}) => theme.media.tablet} {
    display: block;
  }
  color: ${({ theme }) => theme.color.primary};
  font-size: 2rem;
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <>
    <StyledHeaderWrapper>
      <HeaderTop>
        <Link to="/">
          <Logo />
        </Link>
        <Menu>
          <Nav />
        </Menu>
      </HeaderTop>  
      <FacebookSaleBanner />
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />

    </StyledHeaderWrapper> 

    </>
  );
};

export default Header;
