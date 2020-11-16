import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.dark};
  border-radius: 1rem;
`;
const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 1rem;
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
  font-size: ${({ theme }) => theme.font.size.xs};
  margin: 0.5rem;
  color: ${({ theme }) => theme.color.dark};
  border: none;
  border-radius: 1rem;
  min-height: 20rem;
  resize: none;
  padding: 1rem;
`;

const ContactForm = () => (
  <FormWrapper>
    <FormTitle>Masz pytanie? Napisz!</FormTitle>
    <Input
      type="email"
      name="email"
      autoComplete="off"
      placeholder="Twój email"
    />
    <TextArea
      name="message"
      placeholder="W czym mogę pomóc?"
      spellCheck="false"
    />
  </FormWrapper>
);

export default ContactForm;
