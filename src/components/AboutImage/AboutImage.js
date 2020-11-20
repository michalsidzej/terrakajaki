import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const StyledFigure = styled.figure`
  margin-top: 2rem;
`;

const StyledImage = styled(Img)`
  width: calc(100vw - 4rem);
  max-width: 400px;
  height: auto;
`;
const AboutImage = ({ fileName, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 90, maxWidth: 1000, maxHeight: 1000) {
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

AboutImage.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AboutImage;
