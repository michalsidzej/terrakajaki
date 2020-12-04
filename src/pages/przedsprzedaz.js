import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import {StyledButton} from 'components/Button/Button'


const Container = styled.section`
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({theme}) => theme.media.tablet} {
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
`

const Presale = () => (
  <MainTemplate>
      <Container>
        <StyledTitle>Przedsprzedaż</StyledTitle>
        <StyledH2>
          Zamów do 31.12, a otrzymasz 15% zniżki, a także możesz wybrać kolor jaki chcesz!
        </StyledH2>
        <StyledParagraph>
          W środowisku zostaliśmy już przyzwyczajeni do oczekiwania na zamawiane kajaki. Postanowiliśmy wyjść temu problemowi na przeciw i tak powstał pomysł przedsprzedaży. 
        </StyledParagraph>
        <StyledH2>Jak to działa?</StyledH2> 
        <StyledParagraph>
          Zamawiamy kajaki z fabryki kilka razy do roku. Jeżeli kupisz z wyprzedzeniem, oferujemy nawet do 15% zniżki, a oprócz tego oferujemy Ci <styledStrog>wybór dowolnego koloru</styledStrog> z oferty producenta, oraz <StyledStrong>gwarancję terminu dostarczenia.</StyledStrong>
        </StyledParagraph>

        <StyledParagraph>
          Kolejna dostawa jest zaplanowana na <StyledStrong>15 lutego 2021.</StyledStrong> Aby być pewnym tego terminu, musimy złożyć zamówienie z fabryki na początku stycznia. Dlatego promocja trwa <StyledStrong>do 31 grudnia.</StyledStrong>
        </StyledParagraph>
        <StyledParagraph>
          Jeżeli nie uda Ci się zamówić w tym terminie, nie martw się! <StyledStrong>Do 15 stycznia</StyledStrong> możesz zarezerwować jeden z zamówionych przez nas kajaków. W zamian za przedpłatę damy Ci <StyledStrong>10% zniżki!</StyledStrong>
        </StyledParagraph>
        <Button to='/sklep/'>Wróć do sklepu</Button>
        <StyledParagraph>
          PS Tak, w naszym sklepie będą też sprzedawane kajaki firmy Spade, pojawią się niedługo. 
        </StyledParagraph>
      </Container>
  </MainTemplate>
);

export default Presale;