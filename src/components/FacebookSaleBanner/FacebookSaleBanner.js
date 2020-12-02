import React from 'react';
import styled, { css } from 'styled-components';

const BannerCaption = styled.div`
  position: relative;
  padding: .5rem 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  ${({ theme }) => theme.media.tablet} {
    padding: .5rem 0;
  }
`;

const Centerer = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      ${({ theme }) => theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
      }
    `}
  width: ${({ theme }) => theme.maxwidth};
  max-width: 100%;
  margin: 0 auto;

`;

const StyledHeader = styled.h3`
  color: ${({ theme }) => theme.color.light};

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.8rem;
  }
`;

const PresaleBanner = () => (
  <BannerCaption>
    <Centerer flex>
      <StyledHeader>Zapraszamy do zamówień przez <a href='facebook.com/terrakajaki'>facebooka</a> lub maila <a href='mailto:info@terrakajaki.pl'>info@terrakajaki.pl</a> </StyledHeader>
     </Centerer>
  </BannerCaption>
);

export default PresaleBanner;
