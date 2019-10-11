/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ActiveLoaderIcon = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" width={ size || "16" } height={ size || "16" } {...props}>
    <path fill="none" className="svgStroke"  d="M8 1a7 7 0 1 0 7 7" opacity=".2" strokeWidth="2" />
  </svg>
);
ActiveLoaderIcon.displayName = 'ActiveLoaderIcon';
ActiveLoaderIcon.propTypes = {
  size: PropTypes.string
}
export default ActiveLoaderIcon;
/* tslint:enable */
/* eslint-enable */
