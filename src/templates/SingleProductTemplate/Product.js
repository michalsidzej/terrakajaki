import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ShopTemplate from 'templates/ShopTemplate/ShopTemplate';
import Colors from 'components/Product/Colors';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 3rem;
  }
`;

const ProductMedia = styled.div`
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-right: auto;
  }
`;
const InfoWrapper = styled.div`
  ${({ theme }) => theme.media.tablet} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
const ProductInfo = styled.div`
  position: static;
  ${({ theme }) => theme.media.tablet} {
    position: sticky;
    top: 11rem;
    padding: 1rem;
    width: 100%;
    border-radius: 1rem;
    height: auto;
  }
`;

const ProductDetails = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  display: grid;
  grid-row-gap: 20px;
`;
const Gallery = styled.div`
  display: grid;
  grid-gap: 20px;
  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;
const InfoHeader = styled.h2`
  padding: 0;
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
const Price = styled.h2`
  font-size: 2.2rem;
  padding: 1rem 0;
`;
const CrossOut = styled.span`
  text-decoration: line-through;
  margin-right: 0.5rem;
`;
const Discount = styled.span`
  color: #db2100;
`;

const StyledHeader = styled.h3`
  ${({ theme }) => theme.media.tablet} {
    font-size: 1.8rem;
  }
`;
const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
`;
const ColoredLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
`;

const SingleProductTemplate = ({ pageContext }) => {
  const { allContentfulProduct } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProduct {
        nodes {
          id
          slug
          productName
          shortDescription
          description {
            description
          }
          price
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
              fixed(quality: 100, width: 200) {
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
    price,
  } = allContentfulProduct.nodes.find(
    (item) => item.slug === pageContext.product.slug
  );

  const tableContent = [
    [
      'Nazwa',
      `${brand.map(({ brandName }) => brandName).join(' ')} ${productName}`,
    ],
    ['Długość', `${length} cm`],
    ['Szerokość', `${width} cm`],
    ['Waga', `${weight} kg`],
    ['Kajakarz', `${minimumWeight} - ${maximumWeight} kg`],
    ['Wyporność', `${volume} l`],
  ];

  let result;
  if (brand[0].brandName === 'EXO') {
    result = 0.15;
  }
  if (brand[0].brandName === 'Spade') {
    result = 0.1;
  }
  return (
    <MainTemplate>
      <PresaleBanner />
      <StyledContainer>
        <GridContainer>
          <ProductMedia>
            <Gallery>
              <ProductImage fluid={mainImage.fluid} />
            </Gallery>
          </ProductMedia>
          <InfoWrapper>
            <ProductInfo>
              {brand.map(({ logo }) => (
                <>
                  <Img fixed={logo.fixed} />
                </>
              ))}

              <InfoHeader>
                {brand.map(({ brandName }) => `${brandName}`).join(' ')}{' '}
                {productName}
              </InfoHeader>

              <Price>
                <StyledHeader>
                  <ColoredLink to="/przedsprzedaz/">Przedsprzedaż!</ColoredLink>
                </StyledHeader>
                <CrossOut>{price}&nbsp;zł</CrossOut>&nbsp;
                <Discount>{price * (1 - result)}&nbsp;zł*</Discount>
              </Price>
              <StyledHeader>
                Zapraszamy do zamówień przez{' '}
                <StyledLink href="https://facebook.com/terrakajaki">
                  facebooka
                </StyledLink>{' '}
                lub maila{' '}
                <StyledLink href="mailto:info@terrakajaki.pl">
                  info@terrakajaki.pl
                </StyledLink>
              </StyledHeader>
            </ProductInfo>
          </InfoWrapper>
          <ProductDetails>
            <DetailsHeader>{shortDescription}</DetailsHeader>

            <DetailsParagraph>{description.description}</DetailsParagraph>

            <DetailsHeader>Dostępne kolory:</DetailsHeader>
            <Colors />

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
            <DetailsHeader>
              Masz pytanie o kajak? <br />
              Zadzwoń{' '}
              <StyledLink href="tel:+48 695 283 124">
                +48 695 283 124
              </StyledLink>
            </DetailsHeader>
            <DetailsHeader>
              {' '}
              Zobacz wszystkie kajaki w naszej ofercie
            </DetailsHeader>
            <ShopTemplate />
          </ProductDetails>
        </GridContainer>
      </StyledContainer>
    </MainTemplate>
  );
};

SingleProductTemplate.propTypes = {
  pageContext: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SingleProductTemplate;
