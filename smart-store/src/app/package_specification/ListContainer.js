import SearchComponent from '../../common/component';
import searchItem from './actions';

const mapDispatchtoProps = dispatch => ({onSearch: value => dispatch(searchItem(value))});

const SearchContainer = connect(null, mapDispatchtoProps)(SearchComponent);

export default SearchContainer;