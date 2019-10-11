/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DisabledLoaderIcon = ({size, ...props}) => (
  <svg viewBox="0 0 19 19" width={ size || "19" } height={ size || "19" } {...props}>
    <path fill="none" className="svgStroke" d="M9.5 1A8.5 8.5 0 1 0 18 9.5" strokeWidth="2" />
  </svg>
);
DisabledLoaderIcon.displayName = 'DisabledLoaderIcon';
DisabledLoaderIcon.propTypes = {
  size: PropTypes.string
}
export default DisabledLoaderIcon;
/* tslint:enable */
/* eslint-enable */
