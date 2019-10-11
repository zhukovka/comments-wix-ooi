/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DefaultAvatarIcon = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" width={ size || "40" } height={ size || "40" } {...props}>
    <defs>
      <circle id="a" cx="20" cy="20" r="20" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" className="svgFill">
        <use xlinkHref="#a" />
      </mask>
      <use class="svgFill" xlinkHref="#a" />
      <g class="svgFill" mask="url(#b)">
        <g transform="translate(5 10)">
          <circle cx="15.5" cy="7.5" r="7.5" />
          <circle cx="15" cy="32" r="15" />
        </g>
      </g>
    </g>
  </svg>
);
DefaultAvatarIcon.displayName = 'DefaultAvatarIcon';
DefaultAvatarIcon.propTypes = {
  size: PropTypes.string
}
export default DefaultAvatarIcon;
/* tslint:enable */
/* eslint-enable */
