import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FaqToggle from 'components/FAQ/FaqToggle';

const FaqItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
`;
const FaqQuestion = styled.div``;

const StyledHeader = styled.h3`
  display: inline;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet} {
    font-size: 2.4rem;
  }
`;

const FaqAnswer = styled.div`
  overflow: hidden;
  background-color: red;
  width: 100%;
  transition: all 300ms ease-out;
  max-height: ${({ isOpen }) => (isOpen ? '2em' : '0')};
  z-index: 10;
`;

const FAQcomponent = ({ question, answer }) => {
  const [isQuestionOpen, setQuestionState] = useState(false);

  const toggleQuestion = () => {
    setQuestionState(!isQuestionOpen);
  };

  return (
    <FaqItem>
      <FaqQuestion>
        <StyledHeader onClick={toggleQuestion}>{question}</StyledHeader>
        <FaqToggle onClick={toggleQuestion} isOpen={isQuestionOpen} />
      </FaqQuestion>

      <FaqAnswer isOpen={isQuestionOpen}>{answer}</FaqAnswer>
    </FaqItem>
  );
};

FAQcomponent.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQcomponent;
