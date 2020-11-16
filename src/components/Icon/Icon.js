/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import SVG from 'react-inlinesvg';

const Icon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

export default Icon;
