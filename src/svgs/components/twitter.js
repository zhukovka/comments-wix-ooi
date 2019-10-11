/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Twitter = ({size, ...props}) => (
  <svg viewBox="0 0 22 18" width={ size || "22" } height={ size || "18" } {...props}>
    <path className="svgFill" d="M22 2.128c-.82.368-1.69.609-2.581.715a4.573 4.573 0 0 0 1.98-2.51 9.04 9.04 0 0 1-2.86 1.103A4.5 4.5 0 0 0 13.582.318a4.553 4.553 0 0 0-2.743 5.26A12.778 12.778 0 0 1 1.54.828a4.478 4.478 0 0 0-.616 2.286 4.296 4.296 0 0 0 1.657 3.783 13.796 13.796 0 0 1-2.39-.568v.057a4.862 4.862 0 0 0 3.974 4.456 3.28 3.28 0 0 1-1.012.16 3.55 3.55 0 0 1-.762-.082 4.56 4.56 0 0 0 4.253 3.156A8.925 8.925 0 0 1 0 15.958a12.768 12.768 0 0 0 13.09.456 12.945 12.945 0 0 0 6.68-11.345c0-.197-.014-.393-.014-.59A9.15 9.15 0 0 0 22 2.128z"
    />
  </svg>
);
Twitter.displayName = 'twitter';
Twitter.propTypes = {
  size: PropTypes.string
}
export default Twitter;
/* tslint:enable */
/* eslint-enable */
