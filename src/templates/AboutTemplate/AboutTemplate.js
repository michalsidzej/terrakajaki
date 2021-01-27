import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
import AboutImage from 'components/AboutImage/AboutImage';
import { StyledButton } from 'components/Button/Button';

const StyledParagraph = styled.p`
  text-align: justify;
  ${({ theme }) => theme.media.tablet} {
    width: 40rem;
  }
`;

const Button = styled(StyledButton)`
  margin: 2rem 0;
`;

const About = () => (
  <StyledContainer id="about" flex column>
    <Title>Coś o nas</Title>
    <StyledContainer noPadding noMargin flex spaceBetween>
      <StyledContainer noPadding noMargin noPaddingy widthAuto>
        <StyledParagraph>
          Kajakarstwo to nasza wieloletnia, najważniejsza pasja. Większość
          wolnego czasu spędzamy na wodzie. Nasze doświadczenie to prawie 80 lat
          wspólnego i indywidualnego pływania po rzekach górskich i nizinnych,
          startów w zawodach w kajakarstwie płaskim i freestyle, pokonywania
          rzek w Afryce, Himalajach, obydwu Amerykach i Europie.
        </StyledParagraph>
        <br />
        <StyledParagraph>
          Postanowiliśmy wykorzystać swoją wiedzę i zdobyte doświadczenie w
          rodzinnej firmie zajmującej się tym co kochamy.
        </StyledParagraph>
        <Button to="/o-nas">Czytaj więcej</Button>
      </StyledContainer>

      <AboutImage fileName="about square.jpg" alt="Ucieszeni kajakarze" />
    </StyledContainer>
  </StyledContainer>
);

export default About;
