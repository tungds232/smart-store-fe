import { connect } from "react-redux";

import NewItem from "./NewItem";

const mapStateToProps = (state) => (
    {
        data: state.data
    }
)

export default connect(mapStateToProps, null)(NewItem);