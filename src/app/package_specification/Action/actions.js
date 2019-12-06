import { SEARCH_ITEM, FETCH_DATA, NEW_DATA } from './types';

export const search = (shownData) => ({
    type: SEARCH_ITEM,
    payload: {
        shownData
    }
});

export const fetchData = (data) => ({
    type: FETCH_DATA,
    payload: {
        data
    }
});

export const newData = (data) => ({
    type: NEW_DATA,
    payload: {
        data
    }
});
