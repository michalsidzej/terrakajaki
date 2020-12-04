import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import StyledContainer from 'components/Container/Container';

const Container = styled.section`
  width: 100%;
  max-width: 700px;
  padding: 6rem 2rem;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({theme}) => theme.media.tablet} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledTitle = styled.h1`
  padding: 2rem;
  text-align: center;
`;
const StyledH2 = styled.h2`
  padding: 2rem;
`;
const StyledParagraph = styled.p`
  margin: 1rem 0;
  text-align: justify;
`;
const StyledList = styled.ol`
  padding-left: 0;
`;
const StyledListItem = styled.li`
  margin: 1rem 0;
  text-align: justify;
`;
const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledUl = styled.ul`
  list-style: disc;
  padding: 1rem;
`;

const CookiesPolicy = () => (
  <MainTemplate>
    <Container>
      <StyledTitle>Polityka Prywatności</StyledTitle>
      <StyledParagraph>
        Niniejszy dokument określa zasady zbierania i wykorzystywania przez nas
        danych osobowych zgodnie z przepisami rozporządzenia Parlamentu
        Europejskiego i Rady (UE) z dnia 27 kwietnia 2016 r. w sprawie ochrony
        osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
        swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
        (zwany dalej RODO).
      </StyledParagraph>
      <StyledParagraph>
        Administratorem danch osobowych jest Terra Tomasz Jakubiec z siedzibą
        przy ul.Kruczej 4c, 30-245 Kraków z numerem NIP: 678 112 46 21.
        Administrator świaczy usługę drogą elektroniczną oraz sklep internetowy
        pod adresem https://terrakajaki.pl lub https://terrakajaki.com
      </StyledParagraph>
      <StyledH2>Jakie dane zbieramy?</StyledH2>
      <StyledParagraph>
        Zapisujemy adres e-mail za pomocą{' '}
        <StyledStrong>formularzu kontaktowego</StyledStrong> w zakładce
        &quotKontakt&quot lub &quotZapytaj o produkt&quot. Korzystamy z niego
        wyłącznie w celu zwrotnego kontaktu i udzielenia odpowiedzi.
      </StyledParagraph>
      <StyledParagraph>
        Zapisujemy imię i nazwisko, adres e-mail, numer telefonu oraz dane
        adresowe dla dostaw towarów (nazwa odbiorcy, ulica, numer domu, numer
        lokalu, kod pocztowy, miejscowość, kraj), wyłącznie w związku z
        zawarciem umowy kupna – sprzedaży z naszym sklepem. Dane osobowe w tym
        przypadku przetwarzane są wyłącznie na potrzeby zrealizowania zamówienia
        / rezerwacji i tylko w takim zakresie w jakim jest to niezbędne do
        prawidłowego wykonania umowy kupna – sprzedaży towaru.
      </StyledParagraph>
      <StyledH2>Jakie przysługują mi prawa w związku z RODO?</StyledH2>

      <StyledList>
        <StyledListItem>
          Zgodnie z RODO posiadasz{' '}
          <StyledStrong>prawo do dostępu,</StyledStrong> czyli możliwość
          uzyskania informacji czy i jakie Twoje dane są przez nas przetwarzane
          oraz celu w jakim są przetwarzane czy planowanym czasie
          przechowywania.
        </StyledListItem>
        <StyledListItem>
          Jeżeli nie chcesz widnieć w naszej bazie danych, posiadasz{' '}
          <StyledStrong>prawo do bycia zapomnianym,</StyledStrong> jeżeli dane
          osobowe nie są już potrzebne do celów do których zostały zgromadzone,
          odwołujesz zgodę na której podstawie odbyło się przetwarzanie, dane
          były przetwarzane niezgodnie z prawem lub usunięcie danych jest
          wymagane do spełnienia obowiązku prawnego.
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Prawo do ograniczenia przetwarzania</StyledStrong> – w
          przypadku zgłoszenia takiego żądania, przetwarzanie danych osobowych
          ograniczy się tylko do ich przechowywania w następujących przypadkach:
          <StyledUl>
            <StyledListItem>
              <StyledStrong>
                podwarzasz prawidłowość danych osobowych
              </StyledStrong>{' '}
              – na okres pozwalający administratorowi sprawdzić prawidłowość
              tych danych
            </StyledListItem>
            <StyledListItem>
              przetwarzanie jest <StyledStrong>niezgodne z prawem</StyledStrong>{' '}
              i zamiast usunięcia żądają Państwo ograniczenia wykorzystywania
              danych osobowych
            </StyledListItem>
            <StyledListItem>
              administrator nie potrzebuje już danych osobowych do celów, w
              jakich były przetwarzane, jednak osobie, której dane dotyczą są
              one potrzebne do wysunięcia, wykonania lub obrony roszczeń z
              tytułu prawa
            </StyledListItem>
            <StyledListItem>
              złożył zostany sprzeciw wobec przetwarzania, który będzie
              skuteczny w momencie wyjaśnienia czy sprzeciw jest uzasadniony.
            </StyledListItem>
          </StyledUl>
        </StyledListItem>
        <StyledListItem>
          Posiadasz <StyledStrong>prawo do sprostowania,</StyledStrong> czyli
          zażądania od nas niezwłocznego sprostowania dotyczących
          nieprawidłowych danych osobowych. Dodatkowo, z uwzględnieniem celów
          przetwarzania masz prawo do zażądania uzupełnienia niekompletnych
          danych osobowych.
        </StyledListItem>
        <StyledListItem>
          Posiadasz <StyledStrong>prawo do wniesienia skargi,</StyledStrong>{' '}
          czyli zażalenia do właściwego organu nadzorczego odpowiedzialnego za
          ochronę danych. Właściwym organem nadzorczym w Polsce jest Urząd
          Ochrony Danych Osobowych.
        </StyledListItem>
      </StyledList>
      <StyledParagraph>
        W przypadku wszelkich pytań, wątpliwości i próśb dotyczących zakresu i
        realizacji praw oraz potrzeby skorzystania z określonego uprawnienia w
        zakresie ochrony danych osobowych prosimy o kontakt z Administratorem
        danych osobowych: tomanek@terrakajaki.pl
      </StyledParagraph>

      <StyledH2>Co robimy z danymi?</StyledH2>
      <StyledParagraph>
        Przetwarzamy dane osobowe tylko wtedy, gdy:
      </StyledParagraph>
      <StyledUl>
        <StyledListItem>została na to wyrażona zgoda</StyledListItem>
        <StyledListItem>
          przetwarzanie jest niezbędne do wypełnienia zobowiązań
        </StyledListItem>
        <StyledListItem>
          przetwarzanie jest niezbędne dla realizacji uzasadnionych interesów
          administratora lub strony trzeciej i nie wpływa nadmiernie na Państwa
          podstawowe prawa i wolności (art. 6 ust. 1 lit. f RODO) np.
          dochodzenie lub obrona roszczeń jakie może podnosić administrator lub
          jakie mogą być podnoszone wobec administratora, oraz m.in. do celów
          statystycznych (w tym analizowanie i profilowanie danych),
          archiwalnych (dowodowych) będących realizacją prawnie uzasadnionego
          interesu naszej firmy dotyczących zabezpieczenia informacji na wypadek
          prawnej potrzeby wykazania faktów.
        </StyledListItem>
      </StyledUl>
    </Container>
  </MainTemplate>
);

export default CookiesPolicy;
