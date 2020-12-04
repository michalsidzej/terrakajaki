import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import logoImg from 'assets/images/terrakajaki-logo.svg';

const StyledWrapper = styled.div`
  width: 22rem;
`;

const Logo = () => (
  <StyledWrapper>
    <Icon src={logoImg} />
  </StyledWrapper>
);

export default Logo;
