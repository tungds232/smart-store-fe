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
            "key": 0,
            "id": 1,
            "children": [
                {"name": "Lon nhỏ 1", "quantities": 10},
                {"name": "Lon nhỏ 2", "quantities": 20}
            ]
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
            "key": 1,
            "id": 2,
            "children": [
                {"name": "Lon nhỏ 1", "quantities": 10},
                {"name": "Lon nhỏ 2", "quantities": 20}
            ]
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
            "key": 2,
            "id": 3,
            "children": [
                {"name": "Lon nhỏ 1", "quantities": 10},
                {"name": "Lon nhỏ 2", "quantities": 20}
            ]
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
