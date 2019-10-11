/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const comment = ({size, ...props}) => (
  <svg viewBox="0 0 15 15" width={ size || "15" } height={ size || "15" } {...props}>
    <path fill="none" className="svgStroke" d="M.702 14.298l.856-3.246-.099-.176a6.966 6.966 0 1 1 2.665 2.665l-.176-.1-3.246.857z" />
  </svg>
);
comment.displayName = 'comment';
comment.propTypes = {
  size: PropTypes.string
}
export default comment;
/* tslint:enable */
/* eslint-enable */
