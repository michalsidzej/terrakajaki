import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ShopTemplate from 'templates/ShopTemplate/ShopTemplate';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

const StyledContainer = styled.div`
  padding: 4rem 2rem;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 4rem 0;
    margin: 0 auto;
  }
`;
const StyledTitle = styled.h1`
  margin-top: 2rem;
`
const StyledDescription = styled.p`
  margin: 4rem 2rem;
  text-align: justify;
`

const Shop = () => (
  <MainTemplate>
    <PresaleBanner /> 
    <StyledContainer>
      <StyledTitle>Kajaki</StyledTitle>
      <StyledDescription>Prowadzimy sprzedaż kajaków renomowanych marek EXO oraz Spade. Odpowiedni dobór kształtu kajaka jest jedną z najważniejszych decyzji, kiedy zaczynamy przygodę z kajakarstwem. W razie pytań odnośnie doboru kajaka, służymy pomocą. Zadzwoń na <a href='tel:+48695283124'>+48 695 283 124</a> lub napisz na <a href='mailto:info@terrakajaki.pl'>info@terrakajaki.pl</a></StyledDescription>
      <ShopTemplate />
    </StyledContainer>
  </MainTemplate>
);

export default Shop;
