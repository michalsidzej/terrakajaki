import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

const ProductImage = ({ fileName, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 90) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { fluid } = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === fileName
  );

  return (
    <StyledFigure>
      <StyledImage fluid={fluid} alt={alt} />
    </StyledFigure>
  );
};

ProductImage.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
