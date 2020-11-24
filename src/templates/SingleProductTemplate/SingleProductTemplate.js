import React from 'react';
import styled from 'styled-components';
import StyledContainer from 'components/Container/Container';
import ProductImage from 'components/Product/ProductImage';
import { StyledButton } from 'components/Button/Button';

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

const tableContent = [
  ['Nazwa', 'EXO Rexy'],
  ['Długość', '264 cm'],
  ['Szerokość', '65 cm'],
  ['Waga', '18 kg'],
  ['Kajakarz', '65-95 kg'],
  ['Wyporność', '260 l'],
  ['Kokpit', 'EX: 89x49 cm, IN: 81x42 cm'],
];

const SingleProductTemplate = () => (
  <StyledContainer flex column relative>
    <GridContainer>
      <ProductMedia>
        <Gallery>
          <ProductImage fileName="rexy.jpg" alt="Rexy" />
          <ProductImage fileName="rexy.jpg" alt="Rexy" />
          <ProductImage fileName="rexy.jpg" alt="Rexy" />
          <ProductImage fileName="rexy.jpg" alt="Rexy" />
        </Gallery>
      </ProductMedia>
      <ProductInfo>
        <DetailsHeader>Exo Rexy</DetailsHeader>
        <DetailsHeader>3499,99 zł</DetailsHeader>
        <StyledButton>Kup Teraz</StyledButton>
      </ProductInfo>
      <ProductDetails>
        <DetailsHeader>
          Rexy to jeden z najnowszych modeli kajaków Exo - super szybki i
          zwinny. Został zaprojektowany z myślą o zabawie na rzece jako
          uzupełnienie topowych modeli T-Rex L i S.{' '}
        </DetailsHeader>

        <DetailsParagraph>
          Płaski tył kajaka zapewnia niesamowite doznania podczas pływania,
          pozwala na wykonywanie różnych trików. Główne zalety Rexy to szybkość,
          zwinność oraz nieograniczone możliwości zabaw na wodzie przy
          zachowaniu dużej stabilności.
        </DetailsParagraph>
        <DetailsParagraph>
          Kajak znakomicie radzi sobie na trudniejszej wodzie zachowując
          niektóre cechy kajaka creekowego. Rexy jest przewidywalny, pokonuje z
          łatwością duże odwoje oraz dropy dzięki odpowiednio zaprojektowanemu
          dziobowi z dość dużym rockerem. To kajak na którym nie będziesz się
          nudził i rozwiniesz nowe umiejętności. Idealny do urozmaicenia
          ulubionych rzek czy zawodów.
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
);

export default SingleProductTemplate;
