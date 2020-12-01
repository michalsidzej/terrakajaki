import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledFigure = styled.figure`
  position: relative;
  z-index: 10;
`;

const StyledImage = styled(Img)`
  width: 100%;
  height: auto;
`;

const ProductImage = ({ fluid }) => (
  <StyledFigure>
    <StyledImage fluid={fluid} />
  </StyledFigure>
);

ProductImage.propTypes = {
  fluid: PropTypes.oneOfType([Object, PropTypes.arrayOf(Object)]).isRequired,
};

export default ProductImage;
