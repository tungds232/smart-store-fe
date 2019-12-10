import React, { Component, Fragment } from "react";

import {connect} from "react-redux";

import {ButtonActive} from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";

import * as api from "../../../../../../services/api";
import {changeActive} from "../../../../../common/dispatchFunction";
import { fetchData } from '../../../../../../store/packageSpecification/actions';

class ActiveItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    showModalHandler = () => this.setState({visible: true});

    activeHandler = () => {
        this.props.active(this.props.id);
        this.setState({visible: false});
    };

    closeHandler = () => this.setState({visible: false});

    render () {
        return (
            <Fragment>
                <ButtonActive customClass={this.props.customClass} onClick={this.showModalHandler} title={this.props.title} />
                <Modal 
                    title="Cập nhật trạng thái của quy cách" 
                    visible={this.state.visible}
                    onOk={this.activeHandler}
                    onCancel={this.closeModalHandler}
                    content="Bạn có muốn cập nhật trạng thái từ xxx sang yyy không?"
                />
            </Fragment>
        );
    }
}

const mapDispathToProps = (dispatch) => ({
    active: (id) => changeActive(dispatch, api.PACKAGE_SPEFICATION, id, fetchData)
});

export default connect(null, mapDispathToProps)(ActiveItem);