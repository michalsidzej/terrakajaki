import React from 'react';
<<<<<<< HEAD
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
=======
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledFigure = styled.figure`
  position: relative;
  z-index: 10;
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
`;

const StyledImage = styled(Img)`
  width: 100%;
  height: auto;
`;

const ProductImage = ({ fluid }) => (
<<<<<<< HEAD
  <StyledFigure discount>
=======
  <StyledFigure>
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
    <StyledImage fluid={fluid} />
  </StyledFigure>
);

ProductImage.propTypes = {
  fluid: PropTypes.oneOfType([Object, PropTypes.arrayOf(Object)]).isRequired,
};

export default ProductImage;
