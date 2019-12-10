import React, { Component } from "react";

import axios from "../../services/axios";

const withDataNew = (api, title) => WrappedComponent => {
    class WithDataNew extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error = null
            }
        }

        newHandler = (data) => {
            axios.post(api, data)
            .then(response => console.log(response))
            .catch(error => this.setState({error}));
        }

        render () {
            <WrappedComponent {...this.props} {...this.state} newHandler={this.newHandler} title={title} />
        }
    }
    
    return WithDataNew;
}

export default withDataNew;