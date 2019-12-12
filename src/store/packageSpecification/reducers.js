import { SEARCH_ITEM, FETCH_DATA } from './types';

const initState = {
    data: [],
    shownData: [],

    isLoading: true,
    fetchError: false
};

const reducer = ( state = initState, action ) => {
    switch( action.type ) {
         case FETCH_DATA:
            return {...state, 
                data: action.payload.data, 
                shownData: action.payload.data.map((item, index) => ({...item, order_number: index + 1,
                    child: item.child ? item.child.name : null, childId: item.child ? item.child.id : null})), 
                fetchError: action.payload.error,
                isLoading: false};

        case SEARCH_ITEM:
            return {...state, shownData: action.payload.shownData};
        default:
            return state;        
    }
}

export default reducer;
