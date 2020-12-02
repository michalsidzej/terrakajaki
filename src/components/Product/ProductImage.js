import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledFigure = styled.div`
  position: relative;
  z-index: 10;
  ${({discount}) => discount && css`
  ::after {
    content:'-15%';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    /*background-color: ${({theme}) => theme.color.light}; */
    color: ${({theme}) => theme.color.red};
  }
  `}
`;

const StyledImage = styled(Img)`
  width: 100%;
  height: auto;
`;

const ProductImage = ({ fluid }) => (
  <StyledFigure discount>
    <StyledImage fluid={fluid} />
  </StyledFigure>
);

ProductImage.propTypes = {
  fluid: PropTypes.oneOfType([Object, PropTypes.arrayOf(Object)]).isRequired,
};

export default ProductImage;
