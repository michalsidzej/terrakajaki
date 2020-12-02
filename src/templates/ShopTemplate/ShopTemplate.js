import React from 'react';
import styled from 'styled-components';
import SingleProduct from 'components/Product/Product';
import { graphql, useStaticQuery } from 'gatsby';

/*
const StyledContainer = styled.div`
  padding: 4rem 2rem;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 4rem 0;
    margin: 0 auto;
  }
`;

const Sidebar = styled.aside`
  ${({theme}) => theme.media.tablet} {
    width: 20%
  }
`;
const Filters = styled.div``;
*/

const ProductsList = styled.div`
  display: grid;
  grid-gap: 3rem;
  padding: 2rem;
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ShopTemplate = () => {
  const { allContentfulProduct } = useStaticQuery(graphql`
    query AllProducts {
      allContentfulProduct {
        nodes {
          id
          slug
          productName
          shortDescription
          price
          mainImage {
            fluid(quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          brand {
            brandName
          }
        }
      }
    }
  `);

  const { nodes } = allContentfulProduct;
  return (
    <>
      {/*
      <Sidebar>
        <Filters>
          <ol>
            <li>Kupa</li>
            <li>Kupa</li>
            <li>Kupa</li>
            <li>Kupa</li>
            <li>Kupa</li>
          </ol>
        </Filters>
      </Sidebar> 
      */}

      <ProductsList>
        {nodes.map(
          ({
            id,
            slug,
            productName,
            price,
            shortDetails,
            mainImage,
            brand,
          }) => (
            <>
              <SingleProduct
                key={id}
                slug={slug}
                name={productName}
                price={price}
                shortDetails={shortDetails}
                fluid={mainImage.fluid}
                brand={brand}
              />
            </>
          )
        )}
      </ProductsList>
    </>
  );
};

export default ShopTemplate;
