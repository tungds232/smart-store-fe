import React, { Component } from "react";

import axios from "../../../services/axios";

const withCreate = (url, title) => WrappedComponent => {
    class WithCreateComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error: null,
                items: []
            }
        }

        submitHandler = (data) => {
            console.log("Liem 0")
            axios.post(url, data)
            .then(res => res.data)
            .then(response => {
                axios.get(url, {
                    params: {
                        size: 100,
                        page: 0,
                    }
                })
                .then(res => res.data)
                .then(response => {
                    console.log("Liem", response.data.data)
                    this.setState({items: response.data.data})
                    this.props.submit(response.data.data);
                })
                .catch(error => this.setState({error}));
            })
            .catch(error => this.setState({error}));

            

        }

        render () {
            return <WrappedComponent {...this.props} {...this.state} submitHandler={this.submitHandler} title={title} />
        }
    }
    
    return WithCreateComponent;
}

export default withCreate;