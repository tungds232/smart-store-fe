import { SEARCH_ITEM, FETCH_DATA } from './types';

const initState = {
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
    ],

    fetchError: false
};

const reducer = ( state = initState, action ) => {
    switch( action.type ) {
        case FETCH_DATA:
            return {...state, data: action.payload.data, showData: action.payload.data, fetchError: action.payload.error};

        case SEARCH_ITEM:
            return {...state, shownData: action.payload.shownData};

        default:
            return {...state};        
    }
}

export default reducer;
