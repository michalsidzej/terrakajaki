import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import StyledContainer from 'components/Container/Container';

const Container = styled(StyledContainer)`
  max-width: 700px;
  padding: 6rem 0;
`;

const StyledTitle = styled.h1`
  padding: 2rem;
  text-align: center;
`;
const StyledH2 = styled.h2`
  padding: 2rem;
`;
const StyledParagraph = styled.p`
  padding: 1rem;
  text-align: justify;
`;
const StyledList = styled.ol`
  padding-left: 0;
`;
const StyledListItem = styled.li`
  padding: 1rem;
  list-style: none;
  text-align: justify;
`;
const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
  text-decoration: none;
`;

const CookiesPolicy = () => (
  <MainTemplate>
    <Container>
      <StyledTitle>Polityka Cookies</StyledTitle>
      <StyledParagraph>
        Niniejszy dokument określa zasady przechowywania i dostępu do danych na
        urządzeniu Użytkownika za pomocą plików Cookies, służących do realizacji
        usług świadczonych drogą elektroniczną żądanych przez Użytkownika, przez
        firmę Terra Tomasz Jakubiec.
      </StyledParagraph>
      <StyledH2>Definicje</StyledH2>
      <StyledList>
        <StyledListItem>
          <StyledStrong>Administrator</StyledStrong> oznacza jednoosobową
          działalność gospodarczą Terra Tomasz Jakubiec z siedzibą przy
          ul.Kruczej 4c, 30-245 Kraków z numerem NIP: 678 112 46 21.
          Administrator świaczy usługę drogą elektroniczną oraz uzyskuje dostęp
          i przechowuje informacje w urządzeniach.
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Użytkownik</StyledStrong> oznacza podmiot, dla którego
          mogą być świadczone usługi drogą elektroniczną.
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Serwis</StyledStrong> oznacza aplikację lub stronę
          internetową, za pomocą której Administrator prowadzi sklep oraz serwis
          internetowy pod domeną https://terrakajaki.pl lub
          https://terrakajaki.com
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Urządzenie</StyledStrong> oznacza elektroniczne
          urządzenie za pomocą którego Urzytkownik uzyskuje dostęp do serwisu.
        </StyledListItem>
      </StyledList>
      <StyledH2>Czym są pliki Cookies?</StyledH2>
      <StyledParagraph>
        Pliki Cookies to niewielkie pliki tekstowe, zapisywane i przechowywane
        na urządzeniach użytkownika. Ułatwiają one identyfikację użytkownika
        przez serwer, a za tym pozwalają na personalizowanie doświadczenia w
        Internecie.{' '}
        <quote>
          Dzięki plikom cookie strony wiedzą, że jesteś zalogowany, pamiętają
          Twoje ustawienia i udostępniają Ci treści dotyczące danego miejsca.
        </quote>
      </StyledParagraph>
      <StyledH2>Jakich plików używamy?</StyledH2>
      <StyledParagraph>
        Używamy plików, które pozwalają nam zidentyfikować oprogramowanie
        wykorzystywane przez Użytkownika i dostosować Serwis do jego
        indywidualnych potrzeb. Nie powodują one zmian w konfiguracji urządzenia
        Użytkownika ani oprogramowania zainstalowanego na tym urządzeniu. Nie
        pobieramy ani nie zapisujemy danych osobowych ani innych danych poufnych
        z urządzenia. Używane przez nas pliki pomagają nam:
      </StyledParagraph>
      <StyledList>
        <StyledListItem>
          <StyledStrong>Optymalizować serwis</StyledStrong> poprzez dostosowanie
          wyglądu do preferencji Użytkownika, rozpoznanie urządzenia i
          odpowiednie wyświetlanie strony, zapamiętywania ustawień oraz historii
          odwiedzonych stron. Pozwalają nam też zapewniać niezawodność serwisu.
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Analizy i badań</StyledStrong> poprzez tworzenie
          anonimowych statystyk z wykorzystaniem{' '}
          <StyledLink href="https://policies.google.com/privacy?hl=pl">
            Google Analytics
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Prezentowania treści multimedialnych</StyledStrong>{' '}
          publikowanych na serwisach zewnętrznych takich jak{' '}
          <StyledLink href="https://policies.google.com/technologies/cookies?hl=pl">
            youtube.com
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledStrong>Korzystać z interakcji</StyledStrong> w celu
          popularyzacji serwisu na mediach społecznościowych takich jak{' '}
          <StyledLink href="https://www.facebook.com/policies/cookies">
            facebook.com
          </StyledLink>{' '}
          czy{' '}
          <StyledLink href="https://www.instagram.com/policies/cookies">
            instagram.com
          </StyledLink>
        </StyledListItem>
      </StyledList>
      <StyledH2>No dobra, ale co ja mogę właściwie zrobić?</StyledH2>
      <StyledParagraph>
        Możesz w każdej chwili <StyledStrong>usunąć pliki Cookies</StyledStrong>{' '}
        za pomocą wbudowanych w przeglądarkę funkcji. Niestety, ograniczenie
        stosowania plików Cookies może negatywnie wpłynąć na funkcjonalności
        dostępne w serwisie. Szczegółowe informacje na temat zmiany ustawień
        dotyczących plików Cookies dostępne są w dziale pomocy przeglądarki.
      </StyledParagraph>
    </Container>
  </MainTemplate>
);

export default CookiesPolicy;
