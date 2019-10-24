import { combineReducers } from "redux";
import types from "./types";

const reducer = ( state = false, action ) => {

    switch( action.type ) {
        case types.SEARCH_ITEM:
            return state;

        case types.SHOW_ITEM:
            return state;

        case types.ADD_ITEM:
            return state;
        
        case types.UPDATE_ITEM:
            return state;

        case types.REMOVE_ITEM:
            return state;
            
        default:
            return state;        
    }
}

export default reducer;
