/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const GifIcon = ({size, ...props}) => (
  <svg viewBox="0 0 16 11" width={ size || "16" } height={ size || "11" } {...props}>
    <g fill="none" fillRule="evenodd">
      <rect width="15" height="10" x=".5" y=".5" className="svgStroke" rx="1" />
      <text className="svgFill" fontFamily="Arial-BoldMT, Arial" fontSize="6" fontWeight="bold">
        <tspan x="3" y="8">GIF</tspan>
      </text>
    </g>
  </svg>
);
GifIcon.displayName = 'GifIcon';
GifIcon.propTypes = {
  size: PropTypes.string
}
export default GifIcon;
/* tslint:enable */
/* eslint-enable */
