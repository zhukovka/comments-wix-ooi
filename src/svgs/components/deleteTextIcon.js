/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DeleteTextIcon = ({size, ...props}) => (
  <svg viewBox="0 0 22 22" width={ size || "22" } height={ size || "22" } {...props}>
    <defs>
      <circle id="b" cx="10" cy="10" r="10" />
      <filter id="a" width="115%" height="115%" x="-7.5%" y="-7.5%" filterUnits="objectBoundingBox">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.198171422 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)">
        <use className="svgFill" filter="url(#a)" xlinkHref="#b" />
        <use className="svgFill" xlinkHref="#b" />
      </g>
      <path className="svgFill" d="M11.263 11.933l-2.68 2.68-.67-.67 2.68-2.68-2.68-2.68.67-.67 2.68 2.68 2.68-2.68.67.67-2.68 2.68 2.68 2.68-.67.67-2.68-2.68z" />
    </g>
  </svg>
);
DeleteTextIcon.displayName = 'DeleteTextIcon';
DeleteTextIcon.propTypes = {
  size: PropTypes.string
}
export default DeleteTextIcon;
/* tslint:enable */
/* eslint-enable */
