/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const GalleryIcon = ({size, ...props}) => (
  <svg viewBox="0 0 15 12" width={ size || "15" } height={ size || "12" } {...props}>
    <path className="svgFill" d="M0 3a1 1 0 0 1 1-1h2.75L4.418.576A1 1 0 0 1 5.323 0h4.354a1 1 0 0 1 .905.576L11.25 2H14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3zm1 0v8h13V3h-3.5L9.48 1H5.518L4.5 3H1zm6.5 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </svg>
);
GalleryIcon.displayName = 'GalleryIcon';
GalleryIcon.propTypes = {
  size: PropTypes.string
}
export default GalleryIcon;
/* tslint:enable */
/* eslint-enable */
