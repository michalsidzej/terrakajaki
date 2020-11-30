import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ShopTemplate from 'templates/ShopTemplate/ShopTemplate';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

const Shop = () => (
  <MainTemplate>
    <PresaleBanner />
    <ShopTemplate />
  </MainTemplate>
);

export default Shop;
