import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const StyledFigure = styled.figure`
  position: relative;
  z-index: 10;
`;

const StyledImage = styled(Img)`
  width: 100%;
  height: 40rem;
  max-height: 100vh;
  ${({ theme }) => theme.media.tablet} {
    height: auto;
  }
`;
const HeroMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(6, 23, 40);
  opacity: 24%;
`;

const HeroImage = ({ fileName, alt, children }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 90, maxWidth: 1920, maxHeight: 900) {
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
      <StyledImage
        fluid={fluid}
        alt={alt}
        imgStyle={{
          objectFit: 'cover',
        }}
      />
      <HeroMask />
      {children}
    </StyledFigure>
  );
};
HeroImage.defaultProps = {
  children: null,
};
HeroImage.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default HeroImage;

/* export const HeroImageQuery = graphql`
  fragment HeroImageQuery on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920, maxHeight: 757) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
` 

export const query= graphql`
  query {
    file(name: { regex: "/hero-1/" }) {
        ...HeroImageQuery  
      }
    }
` */
