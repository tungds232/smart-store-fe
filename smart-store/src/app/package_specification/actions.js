import types from './types';

const searchItem = (keyword) => {
    type: types.SEARCH_ITEM;
    data: {
        keyword
    }
};

const addItem = (item) => {
    type: types.ADD_ITEM;
    data: {
        item
    }
};

const showItem = (item) => {
    type: types.SHOW_ITEM;
    data: {
        item
    }
};

const updateItem = (item) => {
    type: types.UPDATE_ITEM;
    data: {
        item
    }
};

const removeItem = (item) => {
    type: types.REMOVE_ITEM;
    data: {
        item
    }
};

export default {
    searchItem,
    addItem,
    showItem,
    updateItem,
    removeItem56
};