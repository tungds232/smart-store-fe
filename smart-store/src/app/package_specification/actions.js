import types from './types';

const search_item = (keyword) => {
    type: types.SEARCH_ITEM;
    data: {
        keyword
    }
};

const add_item = (item) => {
    type: types.ADD_ITEM;
    data: {
        item
    }
};

const show_item = (item) => {
    type: types.SHOW_ITEM;
    data: {
        item
    }
};

const update_item = (item) => {
    type: types.UPDATE_ITEM;
    data: {
        item
    }
};

const remove_item = (item) => {
    type: types.REMOVE_ITEM;
    data: {
        item
    }
};

export default {
    search_item,
    add_item,
    show_item,
    update_item,
    remove_item
};