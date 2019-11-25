import { connect } from 'react-redux';

import FetchError  from '../../common/FetchError';
import {closeFetchError} from './Action/actions';

const mapStateToProps = ( state ) => {
    return {
        visible: state.fetchErrorDisplay
    }
}

const mapDispatchToProps = ( dispatch )  => {
    return {
        onOK: () => dispatch(closeFetchError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchError);