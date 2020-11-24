import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import SingleProductTemplate from 'templates/SingleProductTemplate/SingleProductTemplate';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

const ProductPage = () => (
  <MainTemplate>
    <PresaleBanner />
    <SingleProductTemplate />
  </MainTemplate>
);

export default ProductPage;
