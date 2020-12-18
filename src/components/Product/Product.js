/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductImage from 'components/Product/ProductImage';
import { Link } from 'gatsby';

const StyledSingleProduct = styled(Link)`
  text-decoration: none;
  color: initial;
  transition: transform 150ms ease-out;
  border: 1px #e4e4e4 solid;
  border-radius: 1rem;
  padding: 0.5rem;
  :hover {
    transform: scale(1.05);
    text-decoration: none;
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
  let result;
  let discount;
  if (brand[0].brandName === 'EXO') {
    result = 0.15;
    discount = '-15%';
  }
  if (brand[0].brandName === 'Spade') {
    result = 0.1;
    discount = '-10%';
  }

  console.log(result);
  return (
    <StyledSingleProduct to={path}>
      <ProductImage discount={discount} fluid={fluid} />
      <ProductSummary>
        <ProductName>
          {brand.map(({ brandName }) => `${brandName}`).join(' ')} {name}{' '}
        </ProductName>
        <Price>
          <CrossOut>{price} zł</CrossOut>{' '}
          <Discount>{price * (1 - result)} zł</Discount>
        </Price>
        <ProductDetails>{shortDetails}</ProductDetails>
      </ProductSummary>
    </StyledSingleProduct>
  );
};

export default SingleProduct;
