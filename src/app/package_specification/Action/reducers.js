import { SEARCH_ITEM, FETCH_DATA } from './types';

const initState = {
    data: [],
    shownData: [],
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
