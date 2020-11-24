import React from 'react';
import styled from 'styled-components';
import StyledContainer from 'components/Container/Container';
import SingleProduct from 'components/Product/Product';

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
const ProductsTemplate = () => (
  <StyledContainer flex row>
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

export default ProductsTemplate;
