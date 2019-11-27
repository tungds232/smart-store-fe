import {createStore} from 'redux';

import reducers from './reducers';

const intialState = {};

const store = createStore(reducers, intialState);

export default store;
