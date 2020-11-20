import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'templates/HeroTemplate/HeroTemplate';
import About from 'templates/AboutTemplate/AboutTemplate';
import Faq from 'templates/FaqTemplate/FaqTemplate';
import Contact from 'templates/ContactTemplate/ContactTemplate';

const IndexPage = () => (
  <MainTemplate>
    <Hero fileName="hero-1.jpg" alt="Adrien Mattern płynie na górskim kajaku" />
    <About />
    <Faq />
    <Contact />
  </MainTemplate>
);

export default IndexPage;
