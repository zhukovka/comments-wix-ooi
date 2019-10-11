import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import App from './app/app';

const locale = window.__LOCALE__;

ReactDOM.render(
    <I18nextProvider i18n={i18n(locale)}>
        <div>
            <App/>
        </div>
    </I18nextProvider>,
    document.getElementById('root'),
);
