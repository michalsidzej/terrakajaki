import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
import StyledFlexWrapper from 'components/FlexWrapper/FlexWrapper';
import ContactForm from 'components/ContactForm/ContactForm';

const StyledHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.color.primary};
`;
const StyledColumn = styled.div``;

const Data = styled.p``;

const Contact = () => (
  <StyledContainer>
    <Title>Kontakt</Title>
    <StyledFlexWrapper>
      <StyledColumn>
        <StyledHeader>Dane kontaktowe</StyledHeader>
        <Data>
          Tomasz Jakubiec <br />
          tel. : +48 603 305 812 <br />
          tomanek@terrakajaki.pl <br />
        </Data>
        <StyledHeader>Dane firmowe</StyledHeader>
        <Data>
          Ul. Krucza 4c <br />
          30-245 Kraków <br />
          NIP: 678 112 46 21 <br />
          Regon: _______ <br />
        </Data>
      </StyledColumn>
      <ContactForm />
    </StyledFlexWrapper>
  </StyledContainer>
);

export default Contact;
