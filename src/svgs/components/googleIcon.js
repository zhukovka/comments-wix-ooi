/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const GoogleIcon = ({size, ...props}) => (
  <svg viewBox="0 0 30 19" width={ size || "30" } height={ size || "19" } {...props}>
    <path className="svgFill" d="M27.353 10.364c0 .85.012 1.74 0 2.59h-2.647v-2.59h-2.647V7.773h2.647V5.182h2.647c0 .847-.018 1.742 0 2.59H30v2.592h-2.647zm-21.33 7.971C1.79 16.685-.674 12.235.16 7.745.996 3.254 4.89 0 9.428 0a9.516 9.516 0 0 1 6.296 2.341 33.68 33.68 0 0 1-2.39 2.494 6.179 6.179 0 0 0-7.328-.194 6.087 6.087 0 0 0-2.384 4.673 6.092 6.092 0 0 0 2.127 4.796c2.867 2.619 8.284 1.318 9.076-2.69-1.795-.026-3.595 0-5.387-.059V8.133h9.009a10.943 10.943 0 0 1-1.704 7.334 9.266 9.266 0 0 1-10.72 2.868z"
    />
  </svg>
);
GoogleIcon.displayName = 'GoogleIcon';
GoogleIcon.propTypes = {
  size: PropTypes.string
}
export default GoogleIcon;
/* tslint:enable */
/* eslint-enable */
