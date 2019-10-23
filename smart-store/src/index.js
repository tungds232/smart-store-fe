import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from '././app/layout/AppComponent';
import * as serviceWorker from './serviceWorker';

import * as Common from './common/component';
import * as lang from './lang/lang-vi';

// ReactDOM.render(<Common.AddNewItemComponent text={lang.ADD_ICON} />, document.getElementById('root'));
ReactDOM.render(<AppComponent />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
