/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const CloseIcon = ({size, ...props}) => (
  <svg viewBox="0 0 12 12" width={ size || "12" } height={ size || "12" } {...props}>
    <path className="svgFill" d="M6 5.077L11.077 0 12 .923 6.923 6 12 11.077l-.923.923L6 6.923.923 12 0 11.077 5.077 6 0 .923.923 0 6 5.077z" fillRule="evenodd" />
  </svg>
);
CloseIcon.displayName = 'CloseIcon';
CloseIcon.propTypes = {
  size: PropTypes.string
}
export default CloseIcon;
/* tslint:enable */
/* eslint-enable */
