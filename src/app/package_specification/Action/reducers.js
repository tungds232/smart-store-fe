import { SEARCH_ITEM, FETCH_DATA, NEW_DATA } from './types';

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
                    child: item.child ? item.child.name : null})), 
                fetchError: action.payload.error,
                isLoading: false};

        case SEARCH_ITEM:
            return {...state, shownData: action.payload.shownData};
        
        case NEW_DATA: 
            const newData = [
                ...state.data,
                action.payload.data
            ];
            return {
                ...state,
                data: newData,
                shownData: newData.map((item, index) => ({...item, order_number: index + 1,
                    child: item.child ? item.child.name : null})),
                fetchError: action.payload.error,
                isLoading: false
            }
        default:
            return state;        
    }
}

export default reducer;
