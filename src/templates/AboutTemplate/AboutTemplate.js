import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
import AboutImage from 'components/AboutImage/AboutImage';

const StyledParagraph = styled.p`
  ${({ theme }) => theme.media.tablet} {
    width: 40rem;
  }
`;

const About = () => (
<<<<<<< HEAD
  <StyledContainer id='about' flex column paddingTop>
=======
  <StyledContainer flex column>
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
    <Title>Coś o nas</Title>
    <StyledContainer noPadding noMargin flex spaceEvenly>
      <StyledContainer noPadding noMargin widthAuto>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </StyledParagraph>
      </StyledContainer>

      <AboutImage fileName="about square.jpg" alt="Ucieszeni kajakarze" />
    </StyledContainer>
  </StyledContainer>
);

export default About;
