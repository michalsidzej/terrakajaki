import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';

const StyledHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.color.primary};
`;

const Address = styled.address``;

const Contact = () => (
  <>
    <StyledContainer noPadding>
      <Title contact>Kontakt</Title>
      <StyledContainer flex noPadding noMargin spaceEvenly>
        <StyledContainer>
          <StyledHeader>Dane kontaktowe</StyledHeader>
          <Address>
            Tomasz Jakubiec <br />
            tel. : +48 603 305 812 <br />
            tomanek@terrakajaki.pl <br />
          </Address>
          <StyledHeader>Dane firmowe</StyledHeader>
          <Address>
            Ul. Krucza 4c <br />
            30-245 Kraków <br />
            NIP: 678 112 46 21 <br />
            Regon: _______ <br />
          </Address>
        </StyledContainer>
        <ContactForm />
      </StyledContainer>
    </StyledContainer>
  </>
);

export default Contact;
