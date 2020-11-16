import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  padding: 15px;
  border: none;
  background: none;
  position: relative;
  right: -10px;
`;
const InnerHamburger = styled.div`
  position: relative;
  width: 22px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary};

  ::after,
  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.color.primary};
  }

  ::after {
    top: 6px;
  }

  ::before {
    top: -6px;
  }
`;

const Hamburger = ({ onClick }) => (
  <StyledHamburger onClick={onClick}>
    <InnerHamburger />
  </StyledHamburger>
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
