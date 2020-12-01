import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledButton = styled(Link)`
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  background: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background-color: ${({ theme }) => theme.color.secondary};
  transition: transform 150ms ease-out 0s, background-color 150ms ease-out 0s;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.medium};
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
    border: none;
  }
`;

const Button = ({ children, to }) => (
  <StyledButton to={to}> {children} </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;
export { StyledButton };
