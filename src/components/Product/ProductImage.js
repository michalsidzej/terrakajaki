import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledFigure = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  
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

const RatioWrapper = styled.figure`
  width: 100%;
  padding-bottom: 150%;
`

const ProductImage = ({ fluid }) => (
  <StyledFigure discount>
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
          justifyContent: `center`
        }}
        imgStyle={{
          height: `100%`,
          width: `auto`,
          margin: `0 auto`,
          left: 0,
          right: 0
        }}
      />  
  </RatioWrapper>
      
  </StyledFigure>
);

ProductImage.propTypes = {
  fluid: PropTypes.oneOfType([Object, PropTypes.arrayOf(Object)]).isRequired,
};

export default ProductImage;
