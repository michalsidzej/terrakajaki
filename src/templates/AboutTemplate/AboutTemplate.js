import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
import StyledFlexWrapper from 'components/FlexWrapper/FlexWrapper';

const StyledParagraph = styled.p``;

const About = () => (
  <StyledContainer>
    <StyledFlexWrapper>
      <Title>Coś o nas</Title>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </StyledParagraph>
    </StyledFlexWrapper>
  </StyledContainer>
);

export default About;
