import React from 'react';
import styled, { css } from 'styled-components';

const Color = styled.div`
  display: inline-block;
  margin: 0.5rem;
  width: 3rem;
  height: 3rem;
  ${({ blue }) =>
    blue &&
    css`
      background-color: #37b6f5;
    `}
  ${({ blueTiger }) =>
    blueTiger &&
    css`
      background: linear-gradient(45deg, #37b6f5 0 50%, #000000 50% 100%);
    `}
  ${({ redTiger }) =>
    redTiger &&
    css`
      background: linear-gradient(45deg, #fd4052 0 50%, #000000 50% 100%);
    `}
  ${({ greenTiger }) =>
    greenTiger &&
    css`
      background: linear-gradient(45deg, #5acc2f 0 50%, #000000 50% 100%);
    `}
  ${({ red }) =>
    red &&
    css`
      background-color: #fd4052;
    `}
  ${({ green }) =>
    green &&
    css`
      background-color: #5acc2f;
    `}
  ${({ pink }) =>
    pink &&
    css`
      background-color: #b90066;
    `}
  ${({ yellow }) =>
    yellow &&
    css`
      background-color: #ffd500;
    `}
  ${({ fire }) =>
    fire &&
    css`
      background: linear-gradient(45deg, #ffd500 0 50%, #fd4052 50% 100%);
    `}
`;

const Colors = () => (
  <>
    <Color blue />
    <Color blueTiger />
    <Color green />
    <Color greenTiger />
    <Color red />
    <Color redTiger />
    <Color fire />
    <Color pink />
    <Color yellow />
  </>
);

export default Colors;
