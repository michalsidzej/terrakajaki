import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ShopTemplate from 'templates/ShopTemplate/ShopTemplate';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

const StyledContainer = styled.div`
  padding: 4rem 2rem;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 4rem 0;
    margin: 0 auto;
  }
`;

const Shop = () => (
  <MainTemplate>
    <PresaleBanner />
    <StyledContainer>
      <ShopTemplate />
    </StyledContainer>
  </MainTemplate>
);

export default Shop;
