import { connect } from "react-redux";

import ListData from "./ListData";

const mapStateToProps = state => ({
    data: state.package_specification.shownData
});

export default connect(mapStateToProps)(ListData);
