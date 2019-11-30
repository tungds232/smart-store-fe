import { connect } from "react-redux";

import { search as seachAction } from "../../Action/actions";

import Delete from "./Delete";
import axios from "../../../../axios";

const mapDispatchToProps = dispatch => ({
    delete: (id) => {
        axios.delete("/`${id}`")
        .then(
            
        )
        .catch();
    }
});

export default connect(null, mapDispatchToProps)(Delete);