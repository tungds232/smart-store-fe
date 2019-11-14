// import { connect } from 'react-redux';

// import { SearchComponent } from '../../common/component';
// import {showData, searchItem} from './actions';


// const mapStateToProps = ( state ) => {
//     const {data} = state;
//     console.log(data);
//     return {data};
// };

// const mapDispatchToProps = ( dispatch ) => {
//     console.log("THUAN");
//     return {
//         searchItem: (keyWord, data, searchFields) => {
//             console.log("Search");
//             console.log(`Key: ${keyWord}`);

//             if (keyWord === "") {
//                 dispatch(showData());
//             } else {
//                 const findItem = item => {
//                     for (const index in searchFields) {
//                         if (item[searchFields[index]].toString().includes(keyWord)) {
//                             return true;
//                         }
//                     }
        
//                     return false;
//                 }

//                 console.log("Liem 1");
//                 console.log(data);
//                 console.log("Liem 3");
//                 const shownDataxx = data.filter(findItem);
//                 console.log(shownDataxx);
//                 console.log("Liem 2");
//                 dispatch(searchItem(shownDataxx));
//             }
//         }
//     }
// };

// const mergeProps = (propsFromState, propsFromDispatch) => {
//     const searchFields = ["parentPackageSpecification", "quantity", "childPackageSpecification"];
//     return {
//         onSearch: (keyWord) => {propsFromDispatch.searchItem(keyWord, propsFromState.data, searchFields)}
//     }
// }

// const SearchContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchComponent);


// export default SearchContainer;
