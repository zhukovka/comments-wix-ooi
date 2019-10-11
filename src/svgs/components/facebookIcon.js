/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const FacebookIcon = ({size, ...props}) => (
  <svg viewBox="0 0 20 19" width={ size || "20" } height={ size || "19" } {...props}>
    <path className="svgFill" d="M18.896 0H1.104C.494 0 0 .47 0 1.049V17.95C0 18.531.494 19 1.104 19h9.579v-7.358H8.076V8.775h2.607V6.66c0-2.454 1.577-3.79 3.882-3.79 1.104 0 2.052.078 2.329.113v2.564l-1.598.001c-1.254 0-1.496.566-1.496 1.396v1.83h2.989l-.39 2.868h-2.6V19h5.097c.61 0 1.104-.47 1.104-1.049V1.05C20 .469 19.506 0 18.896 0"
      fillRule="evenodd" />
  </svg>
);
FacebookIcon.displayName = 'FacebookIcon';
FacebookIcon.propTypes = {
  size: PropTypes.string
}
export default FacebookIcon;
/* tslint:enable */
/* eslint-enable */
