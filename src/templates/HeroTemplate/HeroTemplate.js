import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from 'components/Button/Button';
import HeroImage from 'components/HeroImage/HeroImage';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

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

const Hero = ({ fileName, alt }) => (
  <HeroWrapper>
    <PresaleBanner />
    <HeroImageWrapper>
      <HeroImage fileName={fileName} alt={alt} />
      <HeroCaption>
        <HeroCaptionText>   
          <StyledHeader>Mamy fajne kajaki</StyledHeader>
          <Button to="/sklep/"> Zobacz </Button>
        </HeroCaptionText>
      </HeroCaption>
    </HeroImageWrapper>
  </HeroWrapper>
);

Hero.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;
