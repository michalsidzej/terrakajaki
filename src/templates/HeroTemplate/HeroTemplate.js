import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from 'components/Button/Button';
import HeroImage from 'components/HeroImage/HeroImage';
import Centerer from 'components/Centerer/Centerer';

const HeroWrapper = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const BannerCaption = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  font-weight: 900;
  background-color: ${({ theme }) => theme.color.dark};
  ${({ theme }) => theme.media.tablet} {
    padding: 4rem 0;
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
  }
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.light};
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
  ${(props) =>
    props.banner &&
    css`
      ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.font.size.l};
      }

      :after {
        content: '-15%';
        font-size: 180px;
        opacity: 15%;
        color: ${({ theme }) => theme.color.white};
        font-weight: 900;
        position: absolute;
        top: -50px;
        left: -20px;
        transform: rotate(-10deg);
        ${({ theme }) => theme.media.tablet} {
          top: -80px;
          left: 100px;
        }
      }
    `}
`;

const RightButton = styled(StyledButton)`
  margin-left: auto;
  display: block;
`;

const Hero = ({ fileName, alt }) => (
  <HeroWrapper>
    <BannerCaption>
      <Centerer>
        <StyledHeader banner>Zamów dziś, a otrzymasz 15% rabatu!</StyledHeader>
        <RightButton> Przedsprzedaż </RightButton>
      </Centerer>
    </BannerCaption>
    <HeroImageWrapper>
      <HeroImage fileName={fileName} alt={alt} />
      <HeroCaption>
        <Centerer>
          <StyledHeader>Mamy fajne kajaki</StyledHeader>
          <StyledButton> Zobacz </StyledButton>
        </Centerer>
      </HeroCaption>
    </HeroImageWrapper>
  </HeroWrapper>
);

Hero.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;
