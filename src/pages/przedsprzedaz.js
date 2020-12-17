import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { StyledButton } from 'components/Button/Button';

const Container = styled.section`
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 6rem 0;
  }
`;

const StyledTitle = styled.h1`
  padding: 2rem;
  text-align: center;
`;
const StyledH2 = styled.h2`
  padding: 1rem 0;
`;
const StyledParagraph = styled.p`
  margin: 1rem 0;
  text-align: justify;
`;

const StyledStrong = styled.strong`
  font-weight: 600;
`;

const Button = styled(StyledButton)`
  margin: 1rem;
`;

const Presale = () => (
  <MainTemplate>
    <Container>
      <StyledTitle>Przedsprzedaż</StyledTitle>
      <StyledH2>
        Zamów do 31 grudnia, a otrzymasz 15% zniżki na kajaki Exo, możesz także
        wybrać kolor jaki chcesz!
      </StyledH2>
      <StyledParagraph>
        W środowisku zostaliśmy już przyzwyczajeni do oczekiwania na zamawiane
        kajaki. Postanowiliśmy wyjść temu problemowi na przeciw i tak powstał
        pomysł przedsprzedaży.
      </StyledParagraph>
      <StyledH2>Jak to działa?</StyledH2>
      <StyledParagraph>
        Z okazji otwarcia działalności Terra Kajaki przygotowaliśmy specjalną
        ofertę. Jeżeli dokonasz przedpłaty za wybrany kajak do{' '}
        <styledStrog>31 grudnia,</styledStrog> otrzymasz 15% zniżki. Dodatkowo
        będziesz miał możliwość wyboru dowolnego koloru z dostępnych u
        producenta, oraz{' '}
        <styledStrog>gwarancję terminu odbioru na 15 lutego 2021.</styledStrog>
      </StyledParagraph>

      <StyledParagraph>
        Dla spóźnialskich mamy jeszcze jedną, ostatnią możliwość. W zamian za
        wybór kajaka z dostępnych w Terra Kajaki i dokonania przedpłaty{' '}
        <StyledStrong>do 15 stycznia</StyledStrong> dostaniesz 10% zniżki oraz{' '}
        <StyledStrong>
          gwarancję terminu odbioru na 15 lutego 2021.
        </StyledStrong>
      </StyledParagraph>
      <Button to="/sklep/">Wróć do sklepu</Button>
    </Container>
  </MainTemplate>
);

export default Presale;
