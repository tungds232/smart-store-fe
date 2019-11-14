import { SHOW_FETCH_DATA_SUCCESS,
         SHOW_FETCH_DATA_ERROR,
         CLOSE_PAGE,
         CLOSE_FETCH_ERROR
       } from './types';

// export const showData = (data) => {
//     return {
//         type: types.SHOW_DATA
//     }
// }

// export const searchItem = (shownData) =>{
//     return {
//         type: types.SEARCH_ITEM,
//         payload: { shownData }
//     }
// };

// export const addItem = (item) => ({
//     type: types.ADD_ITEM
// });

// export const showItem = (item) => ({
//     type: types.SHOW_ITEM,
//     data: {
//         item
//     }
// });

// export const updateItem = (item) => ({
//     type: types.UPDATE_ITEM,
//     data: {
//         item
//     }
// });

// export const removeItem = (item) => ({
//     type: types.REMOVE_ITEM,
//     data: {
//         item
//     }
// });

// // export default {
// //     showData,
// //     searchItem,
// //     addItem,
// //     showItem,
// //     updateItem,
// //     removeItem
// // }

export const showFetchDataSuccess = (data) => {
    return {
        type: SHOW_FETCH_DATA_SUCCESS,
        payload: {
            data
        }
    }
}

export const showFetchDataError = () => {
    return {
        type: SHOW_FETCH_DATA_ERROR
    }
}

export const closePage = () => {
    return {
        type: CLOSE_PAGE
    }
}

export const closeFetchError = () => {
    return {
        type: CLOSE_FETCH_ERROR
    }
}


