import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from 'components/Logo/Logo';
/*
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
*/
import Nav from 'components/Nav/Nav';
import FacebookSaleBanner from 'components/FacebookSaleBanner/FacebookSaleBanner'

const StyledHeaderWrapper = styled.header`
  width: 100%;
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
  width: 100%;
  display: grid;
  align-items: center;
  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: auto 40rem;
    max-width: ${({theme}) => theme.maxwidth};
    padding: .5rem 0;
  }
`;

const Menu = styled.nav`
  background-color: ${({ theme }) => theme.color.primary};
  ${({theme}) => theme.media.tablet} {
    background-color: initial;
  }
`;
const StyledLink = styled(Link)`
  padding: .5rem 2rem;
  justify-self: center;
  ${({theme}) => theme.media.tablet} {
    justify-self: start;
  }
`

const Header = () => {
  /*
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  }; 
  */

  return (
    <>
    <StyledHeaderWrapper>
      <HeaderTop>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <Menu>
          <Nav />
        </Menu>
      </HeaderTop>  
      <FacebookSaleBanner />
      {/* <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} /> */}

    </StyledHeaderWrapper> 

    </>
  );
};

export default Header;
