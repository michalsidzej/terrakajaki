import React from 'react';
import styled from 'styled-components';
import Socials from 'components/Socials/Socials';
import { Link } from 'gatsby';

const StyledFooterWrapper = styled.footer`
  /* height: 6rem; */
  padding: 0.75rem 0;
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
const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.color.light};
  font-size: 1.6rem;
  opacity: 60%;
  margin: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  position: relative;

  :after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.light};
    opacity: 0;
    transition: opacity 50ms ease-out 0s;
  }
  &:hover :after {
    opacity: 1;
  }
`;

const FooterParagraph = styled.p`
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  opacity: 60%;
  padding: 0.5rem;
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

    <FooterLink to="/polityka-cookies/">Polityka Cookies</FooterLink>
    <FooterLink to="/polityka-prywatnosci/">Polityka Prywatności</FooterLink>
    <FooterParagraph>Copyright &copy; {currentYear}</FooterParagraph>
  </StyledFooterWrapper>
);

export default Footer;
