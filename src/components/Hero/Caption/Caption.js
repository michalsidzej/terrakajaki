import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xl};
`;

const StyledCaption = ({ titleText, buttonText }) => (
  <>
    <StyledHeader>{titleText}</StyledHeader>
    <Button> {buttonText} </Button>
  </>
);

StyledCaption.propTypes = {
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default StyledCaption;
