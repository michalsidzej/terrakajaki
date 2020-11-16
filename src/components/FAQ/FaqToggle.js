import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import toggleDown from 'assets/images/toggle-down.svg';

const ToggleWrapper = styled.button`
  padding: 1rem;
  width: 3rem;
  border: none;
  background: none;
`;

const FaqToggle = ({ onClick }) => (
  <ToggleWrapper onClick={onClick}>
    <Icon src={toggleDown} />
  </ToggleWrapper>
);

FaqToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FaqToggle;
