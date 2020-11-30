import React from 'react';
import styled from 'styled-components';

import SingleProduct from 'components/Product/Product';

const StyledContainer = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 2rem 0;
  }
`;

const Sidebar = styled.aside`
  width: 20%;
`;
const Filters = styled.div``;
const ProductsList = styled.ol`
  ${({ theme }) => theme.media.tablet} {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

const productsItems = new Array(10).fill('rexy');
const ShopTemplate = () => (
  <StyledContainer>
    <Sidebar>
      <Filters>
        <ol>
          <li>Kupa</li>
          <li>Kupa</li>
          <li>Kupa</li>
          <li>Kupa</li>
          <li>Kupa</li>
        </ol>
      </Filters>
    </Sidebar>

    <ProductsList>
      {productsItems.map((item) => (
        <SingleProduct key={item} />
      ))}
    </ProductsList>
  </StyledContainer>
);

export default ShopTemplate;
