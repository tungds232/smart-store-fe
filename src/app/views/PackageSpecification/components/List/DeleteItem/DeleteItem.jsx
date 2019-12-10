import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {ButtonDelete} from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";

import * as api from "../../../../../../services/api";
import {remove} from "../../../../../common/dispatchFunction";
import { fetchData } from '../../../../../../store/packageSpecification/actions';

class DeleteItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: false
        }
    }

    showModalHandler = () => {
        this.setState({
            visible: true
        });
    }

    deleteItemHandler = () => {
        this.props.delete(this.props.id);
        this.setState({visible: false});
    };

    closeModalHandler = () => this.setState({visible: false});

    render(){
        return (
            <Fragment>
                <ButtonDelete onClick={this.showModalHandler} title="Loại Bỏ" />
                <Modal 
                    title="Xóa Quy Cách" 
                    visible={this.state.visible}
                    onOk={this.deleteItemHandler}
                    onCancel={this.closeModalHandler}
                    content="Bạn có muốn xóa quy cách này không?"
                />
            </Fragment>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    delete: id => remove(dispatch, api.PACKAGE_SPEFICATION, id, fetchData)
});

export default connect(null, mapDispatchToProps)(DeleteItem);