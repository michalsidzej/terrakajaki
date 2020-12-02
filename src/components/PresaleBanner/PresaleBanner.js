import React from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from 'components/Button/Button';

const BannerCaption = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  font-weight: 900;
  background-color: ${({ theme }) => theme.color.dark};
  overflow: hidden;
  ${({ theme }) => theme.media.tablet} {
    padding: 4rem 0;
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
  position: relative;
  width: ${({ theme }) => theme.maxwidth};
  max-width: 100%;
  margin: 0 auto;

  :after {
    content: '-15%';
    font-size: 180px;
    opacity: 15%;
    color: ${({ theme }) => theme.color.white};
    position: absolute;
    top: -50px;
    left: -10%;
    transform: rotate(-10deg);
    z-index: 10;
    font-family: 'Montserrat Black', sans-serif;
    font-weight: 900;
    ${({ theme }) => theme.media.tablet} {
      top: -80px;
      left: 0;
    }
  }
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.light};
  position: relative;
  z-index: 20;
  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;

const BannerButton = styled(StyledButton)`
  position: relative;
  z-index: 20;
`;

const PresaleBanner = () => (
  <BannerCaption>
    <Centerer flex>
      <StyledHeader>Zamów dziś, a otrzymasz 15% rabatu!</StyledHeader>
<<<<<<< HEAD
      <BannerButton to="/przedsprzedaz/"> Przedsprzedaż </BannerButton>
=======
      <BannerButton to="/sklep/"> Przedsprzedaż </BannerButton>
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
    </Centerer>
  </BannerCaption>
);

export default PresaleBanner;
