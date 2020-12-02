/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = ({ src, ...props }) => (
  <Center {...props}>
    <SVG src={src} />
  </Center>
);

export default Icon;
