import { SEARCH_ITEM } from './types';

export const search = (shownData) => ({
    type: SEARCH_ITEM,
    payload: {
        shownData
    }
});
