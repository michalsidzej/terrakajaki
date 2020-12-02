import React from 'react';
import styled from 'styled-components';
import StyledContainer from 'components/Container/Container';

const FormWrapper = styled(StyledContainer)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  padding: 2rem;
  ${({ theme }) => theme.media.tablet} {
    border-radius: 1rem;
    width: auto;
    margin-right: 2rem;
  }
`;
const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 1rem;
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.white};
  /* display: block; */
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin: 0.5rem;
  color: ${({ theme }) => theme.color.dark};
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 0.5rem;
  color: ${({ theme }) => theme.color.dark};
  border: none;
  border-radius: 1rem;
  min-height: 20rem;
  resize: none;
  padding: 1rem;
`;

const ContactForm = () => (
  <FormWrapper flex center noMargin widthAuto>
    <FormTitle>Masz pytanie? Napisz!</FormTitle>
    <Label for="email">Twój e-mail:</Label>
    <Input
      type="email"
      name="email"
      autoComplete="off"
      placeholder="Twój email"
    />
    <Label for="message">Treść:</Label>
    <TextArea
      name="message"
      placeholder="W czym mogę pomóc?"
      spellCheck="false"
    />
  </FormWrapper>
);

export default ContactForm;
