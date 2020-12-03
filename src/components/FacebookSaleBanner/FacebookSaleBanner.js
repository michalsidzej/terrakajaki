import React from 'react';
import styled, { css } from 'styled-components';

const BannerCaption = styled.div`
  display: none;
  padding: .5rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.media.tablet} {
   display: block;
  }
`;

const Centerer = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      ${({ theme }) => theme.media.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
  width: ${({ theme }) => theme.maxwidth};
  max-width: 100%;
  margin: 0 auto;

`;

const StyledHeader = styled.h3`
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.8rem;
  }
`;
const StyledLink = styled.a`
  color: #c9c9c9;
`

const PresaleBanner = () => (
  <BannerCaption>
    <Centerer flex>
      <StyledHeader>Zapraszamy do zamówień przez <StyledLink href='https://facebook.com/terrakajaki'>facebooka</StyledLink> lub maila <StyledLink href='mailto:info@terrakajaki.pl'>info@terrakajaki.pl</StyledLink> </StyledHeader>
     </Centerer>
  </BannerCaption>
);

export default PresaleBanner;
