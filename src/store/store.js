import {createStore} from 'redux';

import reducers from './reducers';

import package_specification from '../app/package_specification/Action/reducers';

// const intialState = {};
const intialState = {
    data: [
        {
            "id": 1,
            "name": "Thùng",
            "children": [{"name": "Lon", "quantities": 24}],
            "used": true,
            "active": true
        },

        {
            "id": 2,
            "name": "Lon",
            "children": [],
            "used": true,
            "active": true
        },

        {
            "id": 3,
            "name": "Khay",
            "children": [{"name": "Thùng", "quantities": 2}, {"name": "Lon", "quantities": 48}],
            "used": true,
            "active": true
        }
    ],
    shownData: [
        {
            "id": 1,
            "name": "Thùng",
            "children": [{"name": "Lon", "quantities": 24}],
            "used": true,
            "active": true
        },
    
        {
            "id": 2,
            "name": "Lon",
            "children": [],
            "used": true,
            "active": true
        },
    
        {
            "id": 3,
            "name": "Khay",
            "children": [{"name": "Thùng", "quantities": 2}, {"name": "Lon", "quantities": 48}],
            "used": true,
            "active": true
        }
    ]
};

const store = createStore(package_specification, intialState);

export default store;
