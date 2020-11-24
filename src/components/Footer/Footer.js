import React from 'react';
import styled, { css } from 'styled-components';
import Socials from 'components/Socials/Socials';

const StyledFooterWrapper = styled.footer`
  /* height: 6rem; */
  width: 100vw;
  /*padding: 0.75rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: 9998;
`;
const UpperFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  :after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.color.light};
    opacity: 60%;
    width: 100%;
    height: 2px;
    bottom: 0;
  }
`;

const FooterParagraph = styled.p`
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  opacity: 60%;
  padding: 0.5rem;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
`;
const FooterHeader = styled.h3`
  color: ${({ theme }) => theme.color.light};
  text-transform: uppercese;
`;

const SocialIcons = styled.div``;

const currentYear = new Date().getFullYear();

const Footer = () => (
  <StyledFooterWrapper>
    <UpperFooter>
      <FooterHeader>Dołącz do Nas!</FooterHeader>
      <SocialIcons>
        <Socials />
      </SocialIcons>
    </UpperFooter>

    <FooterParagraph uppercase>Polityka Cookies</FooterParagraph>
    <FooterParagraph uppercase>Polityka Prywatności</FooterParagraph>
    <FooterParagraph>Copyright &copy; {currentYear}</FooterParagraph>
  </StyledFooterWrapper>
);

export default Footer;
