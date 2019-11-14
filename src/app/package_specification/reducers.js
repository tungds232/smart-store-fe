import { SHOW_FETCH_DATA_SUCCESS,
         SHOW_FETCH_DATA_ERROR,
         CLOSE_PAGE,
         CLOSE_FETCH_ERROR
        } from './types';

const initState = {
    data: [],
    shownData: []
};
const reducer = ( state = initState, action ) => {

    switch( action.type ) {
        case SHOW_FETCH_DATA_SUCCESS: {
            console.log(action.payload.data);
            return {...state, data:action.payload.data,  originalData:action.payload.data};
        }

        case SHOW_FETCH_DATA_ERROR:
            return {...state, fetchErrorDisplay:true};
            
        case CLOSE_PAGE:
            return {};

        case CLOSE_FETCH_ERROR:
            return {...state, fetchErrorDisplay:false};

        default:
            return state;        
    }
}

export default reducer;
