import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  padding: 15px;
  border: none;
  background: none;
  position: relative;
  right: -10px;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
const InnerHamburger = styled.div`
  position: relative;
  width: 22px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary};
  transition: all 150ms ease-out;
  transform: rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});

  ::after,
  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.color.primary};
    transition: all 150ms ease-out;
  }

  ::after {
    top: 6px;
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(90deg) translate(-6px, 0)' : 'rotate(0)'};
  }

  ::before {
    top: -6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '6px' : '0')});
  }
`;

const Hamburger = ({ onClick, isOpen }) => (
  <StyledHamburger onClick={onClick}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
