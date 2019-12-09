import React, { Component } from "react";

import Delete from "./Delete";
import axios from "../../services/axios";

const withDataDeleting = (api, title) => {
    class WithDataDeleting extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isLoading = false,
                error = null
            }
        }

        deleteHandler = () => {
            axios.delete(`${api}/${this.props.id}`)
        }

        render () {
            <Delete {...this.props} {...this.state} remove={this.deleteHandler} title={title} />
        }
    }
    
    return WithDataDeleting;
}

export default withDataDeleting;