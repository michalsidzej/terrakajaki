import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ fileName, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 90, maxWidth: 1000) {
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
    <>
      <Img
        fluid={fluid}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          margin: '1rem 0',
        }}
      />
    </>
  );
};
Image.defaultProps = {
  alt: '',
};
Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
