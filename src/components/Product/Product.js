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

const PriceDiscount = ({ price }) => (
  <Price>
    <CrossOut>{price} zł</CrossOut>
    <Discount>{price * 0.9} zł</Discount>
  </Price>
);
const PriceNormal = ({ price }) => <Price>{price} zł</Price>;

const SingleProduct = ({ brand, name, price, shortDetails, fluid, slug }) => {
  const path = `/kayaks/${slug}`;

  const result = 0;
  // if (brand[0].brandName === 'EXO') {
  //   result = 0.1;
  // } else {
  //   result = 0;
  // }
  const PriceComponent =
    result === 0.1 ? (
      <PriceDiscount price={price} />
    ) : (
      <PriceNormal price={price} />
    );
  return (
    <StyledSingleProduct to={path}>
      <ProductImage fluid={fluid} />
      <ProductSummary>
        <ProductName>
          {brand.map(({ brandName }) => `${brandName}`).join(' ')} {name}{' '}
        </ProductName>
        {PriceComponent}
        <ProductDetails>{shortDetails}</ProductDetails>
      </ProductSummary>
    </StyledSingleProduct>
  );
};

export default SingleProduct;
