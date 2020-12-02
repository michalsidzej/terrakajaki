import React from 'react';
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Button from 'components/Button/Button'

const Centerer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({theme}) => theme.maxwidth};
  height: calc(100vh - 12rem);
  margin: 0 auto;
`
const StyledTitle = styled.h1`
  font-size: 9rem;
  margin-bottom: 0;

`

const StyledParagraph = styled.p`
  margin: 2rem;
`
const CantFind404 = () => (
  <MainTemplate>
    <Centerer>
      <StyledTitle>Ups... 404</StyledTitle>
      <StyledParagraph>Podana strona nie istnieje lub została usunięta</StyledParagraph>
      <Button to='/'>Wróć do strony głównej</Button>
    </Centerer>
    
  </MainTemplate>
);

export default CantFind404;
