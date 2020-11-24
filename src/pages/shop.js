import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ProductsTemplate from 'templates/ProductsTemplate/ProductsTemplate';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

const Shop = () => (
  <MainTemplate>
    <PresaleBanner />
    <ProductsTemplate />
  </MainTemplate>
);

export default Shop;
