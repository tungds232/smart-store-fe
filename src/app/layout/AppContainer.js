import { connect } from "react-redux";

import App from "./AppComponent";

import axios from "../../axios"
import {fetchData as packSpecFetchData} from "../package_specification/Action/actions";

const mapDispatchToProps = dispatch => ({
    fetchPackSpecData: () => {
        axios.get("/pack_spec_data.json")
        .then(response => {
            const data = Object.keys(response.data).map(key => response.data[key]);
            dispatch(packSpecFetchData(data));
        })
        .catch(error => console.log(error));
    }
});

export default connect(null, mapDispatchToProps)(App);