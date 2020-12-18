import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledFigure = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatioWrapper = styled.figure`
  width: 100%;
  padding-bottom: 100%;
`;
const Discount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  /*background-color: ${({ theme }) => theme.color.light}; */
  color: ${({ theme }) => theme.color.red};
`;

const ProductImage = ({ fluid, discount }) => (
  <StyledFigure>
    <RatioWrapper>
      <Img
        fluid={fluid}
        style={{
          position: `absolute`,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: `flex`,
          justifyContent: `center`,
        }}
        imgStyle={{
          height: `auto`,
          width: `100%`,
          margin: `auto 0`,
          top: 0,
          bottom: 0,
        }}
      />
    </RatioWrapper>
    <Discount>{discount}</Discount>
  </StyledFigure>
);

ProductImage.defaultProps = {
  discount: null,
};
ProductImage.propTypes = {
  fluid: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  discount: PropTypes.string,
};

export default ProductImage;
