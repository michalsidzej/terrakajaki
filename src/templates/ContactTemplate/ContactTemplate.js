import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';

const StyledHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.color.primary};
`;

const StyledColumn = styled(StyledContainer)`
  width: auto;
  margin-left: 0;
  margin-right: 0;
`;
const StyledLink = styled.a``;

const Address = styled.address`
  margin-bottom: 1rem;
  font-style: normal;
`;

const Contact = () => (
  <StyledContainer noPadding>
    <Title contact>Kontakt</Title>
    <StyledContainer flex noPadding noMargin spaceEvenly>
      <StyledColumn>
        <StyledHeader>Dane kontaktowe</StyledHeader>
        <Address>
          Terra Tomasz Jakubiec <br />
          tel.:{' '}
          <StyledLink href="tel:+48 603 305 812">
            +48 603 305 812
          </StyledLink>{' '}
          <br />
          email:{' '}
          <StyledLink href="mailto:tomanek@terrakajaki.pl">
            tomanek@terrakajaki.pl
          </StyledLink>{' '}
          <br />
        </Address>
        <StyledHeader>Dane firmowe</StyledHeader>
        <Address>
          Ul. Krucza 4c <br />
          30-245 Kraków <br />
          NIP: 678 112 46 21 <br />
          Regon: _______ <br />
        </Address>
      </StyledColumn>
      <ContactForm />
    </StyledContainer>
  </StyledContainer>
);

export default Contact;
