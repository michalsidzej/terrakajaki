import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FaqToggle from 'components/FAQ/FaqToggle';

const FaqQuestion = styled.div``;
const StyledHeader = styled.h3`
  display: inline;
`;

const FaqAnswer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

const FAQcomponent = ({ question, answer }) => {
  const [isQuestionOpen, setQuestionState] = useState(false);

  const toggleQuestion = () => {
    setQuestionState(!isQuestionOpen);
  };

  return (
    <div>
      <FaqQuestion>
        <StyledHeader onClick={toggleQuestion}>{question}</StyledHeader>
        <FaqToggle onClick={toggleQuestion} />
      </FaqQuestion>

      <FaqAnswer isOpen={isQuestionOpen}>{answer}</FaqAnswer>
    </div>
  );
};

FAQcomponent.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQcomponent;
