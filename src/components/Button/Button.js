import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  background: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background-color: ${({ theme }) => theme.color.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.color.medium};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Button = ({ children }) => <StyledButton> {children} </StyledButton>;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
export { StyledButton };
