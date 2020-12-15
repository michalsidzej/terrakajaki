import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';
// import ContactForm from 'components/ContactForm/ContactForm';

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
const StyledTitle = styled(Title)`
  ${({ theme }) => theme.media.tablet} {
    padding-left: 2rem;
  }
`;

const Contact = () => (
  <StyledContainer id="contact" noPadding>
    <StyledTitle contact>Kontakt</StyledTitle>
    <StyledContainer flex noPadding noMargin noPaddingy spaceBetween>
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
          <StyledLink href="mailto:info@terrakajaki.pl">
            info@terrakajaki.pl
          </StyledLink>{' '}
          <br />
        </Address>
        <StyledHeader>Dane firmowe</StyledHeader>
        <Address>
          Ul. Krucza 4c <br />
          30-245 Kraków <br />
          NIP: 678 112 46 21 <br />
          Konto (zł): 42 2490 0005 0000 4530 5842 5239 <br />
          Konto (euro): 03 2490 0005 0000 4600 9434 9362 <br />
        </Address>
      </StyledColumn>
      {/* <ContactForm /> */}
    </StyledContainer>
  </StyledContainer>
);

export default Contact;
