import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 6.4rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  ::after {
    content: '';
    height: 0.4rem;
    width: 5.4rem;
    background-color: ${({ theme }) => theme.color.primary};
    display: block;
    bottom: 0;
  }
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Title;
