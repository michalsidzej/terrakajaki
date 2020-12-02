import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

<<<<<<< HEAD

=======
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
const StyledMain = styled.main`
  padding-top: 6rem;
  ${theme.media.tablet} {
    padding-top: 10rem;
  }
`;
const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
