'use strict';

exports.__esModule = true;
exports.default = i18n;

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function i18n(locale) {
  return _i18next2.default.use({
    type: 'backend',
    read: function read(language, namespace, callback) {
      // We configure how i18next should fetch a translation resource when it
      // needs it: We use Webpack's dynamic imports to fetch resources without
      // increasing our bundle size.
      //
      // See https://webpack.js.org/guides/code-splitting/#dynamic-imports for
      // more information.
      return Promise.resolve().then(function () {
        return require('./locales/messages_' + language + '.json');
      }).then(function (translation) {
        return callback(null, translation);
      }).catch(function (error) {
        return callback(error);
      });
    }
  }).init({
    // Initial language
    lng: locale,

    // Fallback language
    fallbackLng: 'en',

    // Don't use a key separator (no support for nested translation objects)
    keySeparator: false,

    // Wait for translation data to be available before rendering a component
    react: {
      wait: true
    }
  });
} /* eslint-plugin-disable */
//# sourceMappingURL=i18n.js.map