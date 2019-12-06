import { connect } from "react-redux";

import NewItem from "./NewItem";

import axios from "../../../../axios";

const mapStateToProps = state => ({
        data: state.package_specification.data
});

const mapDispatchToProps = dispatch => ({
    submit: (data) => {
        axios.post("/package_specification.json", data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);