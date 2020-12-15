import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'templates/HeroTemplate/HeroTemplate';
import About from 'templates/AboutTemplate/AboutTemplate';
import Contact from 'templates/ContactTemplate/ContactTemplate';
import SEO from 'components/SEO/SEO';
import PresaleBanner from 'components/PresaleBanner/PresaleBanner';

const IndexPage = () => (
  <MainTemplate>
    <SEO
      title="Terrakajaki - sklep kajakowy"
      description="Topowe marki kajakarstwa górskiego w jednym miejscu. Kup w przedsprzedaży. Stworzony przez kajakarzy dla kajakarzy."
    />
    <Hero
      fileName="hero-1.jpg"
      alt="Adrien Mattern płynie na górskim kajaku"
      header="Mamy fajne kajaki"
      button="Zobacz"
      to="/sklep/"
    />
    <PresaleBanner />
    <Hero
      fileName="hero-2.jpg"
      alt="Quim Fontane skacze w kajaku"
      header="Skacz jak Quim"
      button="Kup Exo Helixir"
      to="/kayaks/helixir-l/"
    />

    <About />
    <Contact />
  </MainTemplate>
);

export default IndexPage;
