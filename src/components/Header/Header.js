import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const StyledNavWrapper = styled.nav`
  height: 6rem;
  width: 100vw;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0px solid ${({ theme }) => theme.color.primary};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.color.promary};
  background-color: ${({ theme }) => theme.color.light};
  position: fixed;
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <StyledNavWrapper>
      <Logo />
      <Hamburger onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isMenuOpen} />
    </StyledNavWrapper>
  );
};

export default Header;
