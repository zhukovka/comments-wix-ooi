/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const VideoIcon = ({size, ...props}) => (
  <svg viewBox="0 0 17 11" width={ size || "17" } height={ size || "11" } {...props}>
    <path className="svgFill" d="M13 3l2.842-1.421A.8.8 0 0 1 17 2.294v6.412a.8.8 0 0 1-1.158.715L13 8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2zm0 3.9l2.708 1.354a.2.2 0 0 0 .29-.179V2.922a.2.2 0 0 0-.29-.178L13 4.098V6.9zM1 1v9h11V1H1z"
    />
  </svg>
);
VideoIcon.displayName = 'VideoIcon';
VideoIcon.propTypes = {
  size: PropTypes.string
}
export default VideoIcon;
/* tslint:enable */
/* eslint-enable */
