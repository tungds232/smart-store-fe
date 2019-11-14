import {createStore} from 'redux';

import reducers from './reducers';

import package_specification from '../app/package_specification/reducers';

// const intialState = {};
const intialState = {
    data: [
        {
            "orderNumber": 1,
            "parentPackageSpecification": "Thùng",
            "quantity": 1,
            "childPackageSpecification": "Lon",
            "status": "unused",
            "action": {
                "delete": true,
                "block": false,
                "detail": true
            },
            "key": 0
        },
    
        {
            "orderNumber": 2,
            "parentPackageSpecification": "Khay",
            "quantity": 2,
            "childPackageSpecification": "Lon",
            "status": "unused",
            "action": {
                "delete": true,
                "block": false,
                "detail": true
            },
            "key": 1
        },
    
        {
            "orderNumber": 3,
            "parentPackageSpecification": "Thùng",
            "quantity": 24,
            "childPackageSpecification": "Lon",
            "status": "unused",
            "action": {
                "delete": true,
                "block": false,
                "detail": true
            },
            "key": 2
        }
    ],
    shownData: [
        {
            "orderNumber": 1,
            "parentPackageSpecification": "Thùng",
            "quantity": 1,
            "childPackageSpecification": "Lon",
            "status": "unused",
            "action": {
                "delete": true,
                "block": false,
                "detail": true
            },
            "key": 0
        },
    
        {
            "orderNumber": 2,
            "parentPackageSpecification": "Khay",
            "quantity": 2,
            "childPackageSpecification": "Lon",
            "status": "unused",
            "action": {
                "delete": true,
                "block": false,
                "detail": true
            },
            "key": 1
        },
    
        {
            "orderNumber": 3,
            "parentPackageSpecification": "Thùng",
            "quantity": 24,
            "childPackageSpecification": "Lon",
            "status": "unused",
            "action": {
                "delete": true,
                "block": false,
                "detail": true
            },
            "key": 2
        }
    ]
};

const store = createStore(package_specification, intialState);

export default store;
