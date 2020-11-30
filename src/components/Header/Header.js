import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Nav from 'components/Nav/Nav';

const StyledHeaderWrapper = styled.header`
  height: 6rem;
  width: 100vw;
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
    height: 10rem;
    padding: 0;
  }
`;
const HeaderTop = styled.div`
  ${({ theme }) => theme.media.tablet} {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const MenuWrapper = styled.div`
  display: none;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Menu = styled.nav`
  width: ${({ theme }) => theme.maxwidth};
  max-width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-size: 2.4rem;
  font-weight: 500;
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <StyledHeaderWrapper>
      <HeaderTop>
        <Logo />
      </HeaderTop>
      <MenuWrapper>
        <Menu>
          <Nav />
        </Menu>
      </MenuWrapper>
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />
    </StyledHeaderWrapper>
  );
};

export default Header;
