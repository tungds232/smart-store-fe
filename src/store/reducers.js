import { combineReducers } from 'redux';

import package_specification from '../app/package_specification/Action/reducers';
import packageSpecification from './packageSpecification/reducers';

const reducers = combineReducers({
    package_specification,
    packageSpecification
});

export default reducers;

