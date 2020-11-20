import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import facebook from 'assets/images/facebook-brands.svg';
import instagram from 'assets/images/instagram-brands.svg';

const StyledIcon = styled(Icon)`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.color.light};
  margin: 1rem;
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const Socials = () => (
  <SocialWrapper>
    <StyledIcon src={facebook} />
    <StyledIcon src={instagram} />
  </SocialWrapper>
);

export default Socials;
