/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ActivePlugInCloseIcon = ({size, ...props}) => (
  <svg viewBox="0 0 18 18" width={ size || "18" } height={ size || "18" } {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx="9" cy="9" r="9" className="svgFill"/>
      <path className="svgFill" d="M8.36 9.029l-2.68-2.68.67-.67 2.679 2.68 2.68-2.68.67.67-2.68 2.68 2.68 2.68-.67.67-2.68-2.68-2.68 2.68-.67-.67 2.68-2.68z" />
    </g>
  </svg>
);
ActivePlugInCloseIcon.displayName = 'ActivePlugInCloseIcon';
ActivePlugInCloseIcon.propTypes = {
  size: PropTypes.string
}
export default ActivePlugInCloseIcon;
/* tslint:enable */
/* eslint-enable */
