import React from 'react';
import FAQcomponent from 'components/FAQ/FAQ';
import Title from 'components/Title/Title';
import StyledContainer from 'components/Container/Container';

const faqContent = [
  {
    question: 'Czy dostawa jest wliczona w cenę kajaka?',
    answer: 'Niestety nie, kajaki trzeba odbierać samodzielnie',
    open: true,
  },
  {
    question: 'Kto jest super?',
    answer: 'Ty. Kupujący.',
    open: false,
  },
  {
    question: 'Jak dużo kajaków można zamówić?',
    answer: 'Ile tylko chcesz',
    open: false,
  },
];

const FAQ = () => {
  return (
<<<<<<< HEAD
    <StyledContainer paddingTop>
=======
    <StyledContainer>
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
      <Title>FAQ</Title>
      <StyledContainer noPadding noMargin>
        {faqContent.map(({ question, answer }) => (
          <>
            <FAQcomponent question={question} answer={answer} />
          </>
        ))}
      </StyledContainer>
    </StyledContainer>
  );
};

export default FAQ;
