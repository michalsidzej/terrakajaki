import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import facebook from 'assets/images/facebook-brands.svg';
import instagram from 'assets/images/instagram-brands.svg';

const StyledIcon = styled(SVG)`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.color.light};
  margin: 1rem;
  transition: transform 150ms ease-out 0s;
  &:hover {
    transform: scale(0.9);
  }
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const SocialLink = styled.a``;

const Socials = () => (
  <SocialWrapper>
    <SocialLink href="https://www.facebook.com/terrakajaki/" target="_blank">
      <StyledIcon src={facebook} />
    </SocialLink>
    <SocialLink href="https://www.instagram.com/terrakajaki/" target="_blank">
      <StyledIcon src={instagram} />
    </SocialLink>
  </SocialWrapper>
);

export default Socials;
