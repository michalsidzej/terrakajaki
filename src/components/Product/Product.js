/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductImage from 'components/Product/ProductImage';
import { Link } from 'gatsby';

const StyledSingleProduct = styled(Link)`
  text-decoration: none;
  color: initial;
  transition: transform 150ms ease-out;
  border-radius: 1rem;
  :hover {
    transform: scale(1.05);
  }
`;
const CrossOut = styled.span`
  text-decoration: line-through;
  margin-right: 0.5rem;
`;

const Discount = styled.span`
  color: #db2100;
`;
const ProductSummary = styled.summary``;

const ProductName = styled.h3``;
const Price = styled.h4``;
const ProductDetails = styled.p``;

const SingleProduct = ({ brand, name, price, shortDetails, fluid, slug }) => {
  const path = `/kayaks/${slug}`;
  return (
    <StyledSingleProduct to={path}>
      <ProductImage fluid={fluid}/>
      <ProductSummary>
        <ProductName>
          {brand.map(({ brandName }) => `${brandName}`).join(' ')} {name}{' '}
        </ProductName>
        <Price>
          <CrossOut>{price} zł</CrossOut> <Discount>{price * 0.85} zł</Discount>
        </Price>
        <ProductDetails>{shortDetails}</ProductDetails>
      </ProductSummary>
    </StyledSingleProduct>
  );
};

export default SingleProduct;
