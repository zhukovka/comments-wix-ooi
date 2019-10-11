/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const MoreActionIcon = ({size, ...props}) => (
  <svg viewBox="0 0 3 16" width={ size || "3" } height={ size || "16" } {...props}>
    <path className="svgFill" d="M1.444 9.5A1.5 1.5 0 1 1 3 8a1.528 1.528 0 0 1-1.556 1.5zm0-6.5A1.5 1.5 0 1 1 3 1.5 1.528 1.528 0 0 1 1.444 3zm.112 10A1.5 1.5 0 1 1 0 14.5 1.531 1.531 0 0 1 1.556 13z"
      fillRule="evenodd" />
  </svg>
);
MoreActionIcon.displayName = 'MoreActionIcon';
MoreActionIcon.propTypes = {
  size: PropTypes.string
}
export default MoreActionIcon;
/* tslint:enable */
/* eslint-enable */
