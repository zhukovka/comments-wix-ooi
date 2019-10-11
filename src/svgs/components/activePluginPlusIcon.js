/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ActivePluginPlusIcon = ({size, ...props}) => (
  <svg viewBox="0 0 18 18" width={ size || "18" } height={ size || "18" } {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx="9" cy="9" r="9" className="svgFill"/>
      <path className="svgFill" d="M8.526 8.526v-3.79h.948v3.79h3.79v.948h-3.79v3.79h-.948v-3.79h-3.79v-.948h3.79z" />
    </g>
  </svg>
);
ActivePluginPlusIcon.displayName = 'ActivePluginPlusIcon';
ActivePluginPlusIcon.propTypes = {
  size: PropTypes.string
}
export default ActivePluginPlusIcon;
/* tslint:enable */
/* eslint-enable */
