import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button';
import Img from 'gatsby-image';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 2rem 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 3rem;
`;

const ProductMedia = styled.div`
  width: 100%;
  margin-right: auto;
`;
const ProductInfo = styled.div`
  position: sticky;
  top: 12rem;
  width: 100%;
  max-height: 400px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 1rem;
`;

const ProductDetails = styled.div`
  margin-top: 4rem;
  width: 100%;
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const DetailsHeader = styled.h2`
  padding: 2rem 0;
`;

const DetailsParagraph = styled.p`
  padding: 1rem 0;
`;

const DetailsTable = styled.table`
  width: 100%;
`;
const TableHeader = styled.th`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: 600;
  padding-left: 2.5rem;
  width: 25%;
  text-align: left;
`;
const TableData = styled.td`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  padding-left: 2.5rem;
  width: 75%;
`;

const ProductImage = styled(Img)`
  width: 100%;
  height: auto;
`;

const SingleProductTemplate = () => {
  const { allContentfulProduct } = useStaticQuery(graphql`
    query MyQuery1 {
      allContentfulProduct {
        nodes {
          id
          slug
          productName
          shortDescription
          description {
            description
          }
          mainImage {
            fluid(quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          length
          minimumWeight
          maximumWeight
          volume
          weight
          width
          brand {
            brandName
            logo {
              fixed(quality: 100, height: 70) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const {
    brand,
    productName,
    shortDescription,
    description,
    mainImage,
    length,
    minimumWeight,
    maximumWeight,
    volume,
    weight,
    width,
  } = allContentfulProduct.nodes.find((item) => item.slug === 'rexy');

  const tableContent = [
    ['Nazwa', `${brand[0].brandName} ${productName}`],
    ['Długość', `${length} cm`],
    ['Szerokość', `${width} cm`],
    ['Waga', `${weight} kg`],
    ['Kajakarz', `${minimumWeight} - ${maximumWeight} kg`],
    ['Wyporność', `${volume} l`],
  ];

  return (
    <MainTemplate>
      <PresaleBanner />
      <StyledContainer flex column relative>
        <GridContainer>
          <ProductMedia>
            <Gallery>
              <ProductImage fluid={mainImage.fluid} />
            </Gallery>
          </ProductMedia>
          <ProductInfo>
            <Img fixed={brand[0].logo.fixed} />
            <DetailsHeader>
              {' '}
              {brand[0].brandName} {productName}
            </DetailsHeader>
            <DetailsHeader>3499,99 zł</DetailsHeader>
            <StyledButton>Kup Teraz</StyledButton>
          </ProductInfo>
          <ProductDetails>
            <DetailsHeader>{shortDescription}</DetailsHeader>

            <DetailsParagraph>{description.description}</DetailsParagraph>
            <DetailsParagraph>
              Kajak znakomicie radzi sobie na trudniejszej wodzie zachowując
              niektóre cechy kajaka creekowego. Rexy jest przewidywalny,
              pokonuje z łatwością duże odwoje oraz dropy dzięki odpowiednio
              zaprojektowanemu dziobowi z dość dużym rockerem. To kajak na
              którym nie będziesz się nudził i rozwiniesz nowe umiejętności.
              Idealny do urozmaicenia ulubionych rzek czy zawodów.
            </DetailsParagraph>
            <DetailsHeader>Specyfikacja techniczna</DetailsHeader>
            <DetailsTable>
              <tbody>
                {tableContent.map((item) => (
                  <tr key={item[0]}>
                    <TableHeader>{item[0]}</TableHeader>
                    <TableData>{item[1]}</TableData>
                  </tr>
                ))}
              </tbody>
            </DetailsTable>
          </ProductDetails>
        </GridContainer>
      </StyledContainer>
    </MainTemplate>
  );
};

export default SingleProductTemplate;
