'use strict';

exports.__esModule = true;

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We initialize i18next once with configuration for component tests.
exports.default = _i18next2.default.init({
  // This configuration causes i18n to always return the key from calling `t('...')`
  fallbackLng: 'cimode',

  // Change to `true` to see more information
  debug: false,

  // Configure our translate HOC to not wait for data to be available
  react: {
    wait: false
  }
}); /* eslint-plugin-disable */
//# sourceMappingURL=i18n.mock.js.map