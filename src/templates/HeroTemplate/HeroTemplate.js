import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from 'components/Button/Button';
import HeroImage from 'components/HeroImage/HeroImage';

const HeroWrapper = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
`;
const HeroCaption = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeroCaptionText = styled.div`
  width: ${({ theme }) => theme.maxwidth};
  padding: 2rem;
  max-width: 100%;
  ${({ right }) =>
    right &&
    css`
      ${({ theme }) => theme.media.tablet} {
        text-align: right;
      }
    `}
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.light};
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;
const Button = styled(StyledButton)``;

const Hero = ({ fileName, alt, header, button, to, right }) => (
  <HeroWrapper>
    <HeroImageWrapper>
      <HeroImage fileName={fileName} alt={alt} />
      <HeroCaption>
        <HeroCaptionText right={right}>
          <StyledHeader>{header}</StyledHeader>
          <Button to={to}> {button} </Button>
        </HeroCaptionText>
      </HeroCaption>
    </HeroImageWrapper>
  </HeroWrapper>
);
Hero.defaultProps = {
  right: false,
};
Hero.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

export default Hero;
