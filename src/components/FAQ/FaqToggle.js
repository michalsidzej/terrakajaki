import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ToggleWrapper = styled.button`
  padding: 1rem;
  width: 3rem;
  min-height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  top: -3px;
  ${({ theme }) => theme.media.tablet} {
    top: -5px;
  }
`;

const TriangleShape = styled.div`
  width: 0;
  height: 0;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  border-top: 0.7rem solid ${({ theme }) => theme.color.primary};
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  transition: transform 300ms ease-out 0s;
`;

const FaqToggle = ({ onClick, isOpen }) => (
  <ToggleWrapper onClick={onClick}>
    <TriangleShape isOpen={isOpen} />
  </ToggleWrapper>
);

FaqToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default FaqToggle;
