import { SEARCH_ITEM, FETCH_DATA } from './types';

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

