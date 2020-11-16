import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: auto;
  max-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920, maxHeight: 757) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;

      return <StyledBackgroundImage Tag="section" fluid={imageData} />;
    }}
  />
);

export default BackgroundSection;
