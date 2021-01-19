import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Image from 'components/Image/Image';
import HeroImage from '../components/HeroImage/HeroImage';

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: grid;
  place-items: center;
`;
const Title = styled.h2`
  color: white;
  font-size: ${({ theme }) => theme.font.size.xxl};
`;

const Container = styled.section`
  width: 100%;
  max-width: 700px;
  padding: 6rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.tablet} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Paragraph = styled.p`
  margin: 3rem 0;
  text-indent: 2rem;
`;

const Header = styled.h3`
  display: inline;
`;
const AboutPage = () => (
  <MainTemplate>
    <HeroImage fileName="rodzina.JPG" alt="tomanki siedzą i się śmieją">
      <TitleWrapper>
        <Title>Kajaki są naszą pasją</Title>
      </TitleWrapper>
    </HeroImage>
    <Container>
      <Paragraph>
        Kajakarstwo to nasza wieloletnia, najważniejsza pasja. Większość wolnego
        czasu spędzamy na wodzie. Nasze doświadczenie to prawie 80 lat wspólnego
        i indywidualnego pływania po rzekach górskich i nizinnych, startów w
        zawodach w kajakarstwie płaskim i freestyle, pokonywania rzek w Afryce,
        Himalajach, obydwu Amerykach i Europie. Postanowiliśmy wykorzystać swoją
        wiedzę i zdobyte doświadczenie w rodzinnej firmie zajmującej się tym co
        kochamy.
      </Paragraph>
      <Paragraph>
        <Header>Tomasz Jakubiec ”Tomanek”</Header> – w młodości zawodnik w
        kajakarstwie płaskim . Od 1988 członek AKTK Bystrze, w którym przeszedł
        wszystkie szczeble „kariery”. Prezes, Szkoleniowiec, organizator
        ogólnopolskiego spływu, wypraw do Afryki, USA, Nepalu, Peru. Autor wielu
        relacji i publikacji, inicjator wystaw i albumów fotograficznych,
        prelegent od lat propagujący osiągnięcia Bystrza i turystykę kajakową w
        Polsce. Członek The Explorers Club.
      </Paragraph>
      <StyledImg fileName="tomanek1.jpg" />
      <StyledImg fileName="tomanek2.jpg" />
      <StyledImg fileName="tomanek3.jpg" />
      <StyledImg fileName="tomanek4.jpg" />
      <StyledImg fileName="tomanek5.jpg" />
      <Paragraph>
        <Header>Agata Sobieraj-Jakubiec</Header> – wciągnięta w kajakarstwo
        przez rodziców od 4 roku życia jako początkowo bierna uczestniczka
        spływów kajakowych. Potem dobrowolnie, w wieku prawie dorosłym, zaczęła
        trenować freestyle w Krakowskim Klubie Kajakowym. Członek kadry
        narodowej. Zajmowała miejsca na podium w Mistrzostwach Polski, Pucharze
        Europy. Jako pierwsza Polka zdobyła międzynarodowe uprawnienia
        licencjonowanego przewodnika pontonowego.
      </Paragraph>
      <StyledImg fileName="agata1.jpg" />
      <StyledImg fileName="agata2.JPG" />
      <StyledImg fileName="agata3.jpg" />
      <StyledImg fileName="agata4.jpg" />
      <Paragraph>
        <Header>Michał Sobieraj-Jakubiec „Miszke”</Header> – razem z Agatą od
        maleńkości zabierany na spływy kajakowe. W wieku 14 lat rozpoczął
        przygodę z freestyl’em. Do dzisiaj jest członkiem polskiej kadry
        narodowej. Podczas MŚ w 2019 zajął XV miejsce, regularnie staje na pudle
        Mistrzostw Polski. Razem z Agatą są pierwszymi Polakami posiadającymi
        międzynarodowe uprawnienia raft guide. Od kilku lat, w sezonie
        wakacyjnym, pracuje jako instruktor kajakowy i pontonowy w Austrii.
      </Paragraph>
      <StyledImg fileName="miszke1.jpg" />
      <StyledImg fileName="miszke2.JPG" />
      <StyledImg fileName="miszke3.jpeg" />
      <StyledImg fileName="miszke4.jpg" />
      <StyledImg fileName="miszke5.jpg" />
    </Container>
  </MainTemplate>
);

export default AboutPage;
