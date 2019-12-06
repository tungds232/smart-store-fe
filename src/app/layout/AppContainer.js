import { connect } from "react-redux";

import App from "./AppComponent";

import axios from "../../axios"
import {fetchData as packSpecFetchData} from "../package_specification/Action/actions";

const mapDispatchToProps = dispatch => ({
    fetchPackSpecData: () => {
        axios.get("/pack_spec_data/example.json")
        .then(response => {
            dispatch(packSpecFetchData(response.data.data.data));
        })
        .catch(error => console.log(error));
    }
});

export default connect(null, mapDispatchToProps)(App);