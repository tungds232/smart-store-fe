import { connect } from "react-redux";

import App from "./AppComponent";

import axios from "../../axios"
import {fetchData as packSpecFetchData} from "../package_specification/Action/actions";

const mapDispatchToProps = dispatch => ({
    fetchPackSpecData: () => {
        axios.get("http://171.244.37.150:8080/api/package-specification?page=0&size=100")
        .then(res => res.data) // Vì khi nhận được json, thằng axios nó bỏ chuối json của mình vào data của object nó
        .then(response => {
            dispatch(packSpecFetchData(response.data.data));
        })
        .catch(error => console.log(error));
    }
});

export default connect(null, mapDispatchToProps)(App);