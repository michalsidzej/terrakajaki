import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from 'components/Button/Button';

const StyledWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 6.5rem;
  height: calc(100vh - 6rem);
  width: 90vw;
  background-color: ${({ theme }) => theme.color.light};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 150ms ease-out 0s;
`;

const StyledMenu = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledMenuItem = styled.li`
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.font.size.m};
`;

const FaqButton = styled(StyledButton)`
  width: 60%;
  height: 4rem;
  margin-top: auto;
`;

const menuItems = ['kajaki', 'inspiracje', 'kontakt'];

const MobileMenu = ({ isOpen }) => (
  <StyledWrapper isOpen={isOpen}>
    <StyledMenu>
      {menuItems.map((item) => (
        <StyledMenuItem key={item}>{item}</StyledMenuItem>
      ))}
      <FaqButton>FAQ</FaqButton>
    </StyledMenu>
  </StyledWrapper>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
