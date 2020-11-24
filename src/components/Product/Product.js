import React from 'react';
import styled from 'styled-components';
import ProductImage from 'components/Product/ProductImage';

const StyledSingleProduct = styled.li`
  transition: transform 150ms ease-out;
  border-radius: 1rem;
  :hover {
    transform: scale(1.05);
  }
`;
const ProductSummary = styled.summary``;

const ProductName = styled.h3``;
const Price = styled.h4``;
const ProductDetails = styled.details``;

const SingleProduct = () => (
  <StyledSingleProduct>
    <ProductImage fileName="rexy.jpg" alt="Rexy" />
    <ProductSummary>
      <ProductName> EXO Rexy </ProductName>
      <Price>3899,99 zł</Price>
      <ProductDetails>
        Rexy to jeden z najnowszych modeli kajaków Exo - super szybki i zwinny.
        Został zaprojektowany z myślą o zabawie na rzece jako uzupełnienie
        topowych modeli T-Rex L i S.
      </ProductDetails>
    </ProductSummary>
  </StyledSingleProduct>
);

export default SingleProduct;
