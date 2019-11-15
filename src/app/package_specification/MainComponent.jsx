import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Table, Divider, PageHeader, Tag, Button, Statistic, Descriptions, Row, Input, Modal, Form, Result, Select, notification } from 'antd';

import * as lang from '../../lang/lang-vi';

import './package_specification.css';

import {
    showFetchDataSuccess, 
    showFetchDataError, 
    closePage
} from './actions';

import FetchError from "./FetchErrorContainer";
import List from "././ListComponent";

// import {HeaderComponent} from '../../common/component';
// import SearchContainer from './SearchContainer';
// import { ReactComponent } from '*.svg';
// import { ListComponent } from '../../common/component';
// import { ReactComponent } from '*.svg';

const { Search } = Input;
const { Option } = Select;
const PACKAGE_SPECIFICATION_URL = "http://192.168.0.102:8887/test.jsonx";
const PACKAGE_SPECIFICATION_DELETE_URL = "http://192.168.0.102:8887/delete.json";

// export class MainComponent extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             modalTitle: "",
//             showModal: true,
//             data: [],
//             shownData: [],
//             errorFetchVisible: false,
//         }
//     }

//     loadData = (data) => {
//         let currentData = [];
//         for (const item in data) {
//             currentData.push(data[item]);
//         }

//         console.log(currentData);
//         this.setState({data: currentData, shownData: currentData});

//     }

//     // onModalCancel = () => {this.setState({ showModal: false })}

//     fetchData = () => { 
//         fetch(PACKAGE_SPECIFICATION_URL)
//         .then(response => response.json())
//         .then(result => {console.log(result); this.loadData(result)})
//         .catch(error=> {console.log("Fetch fail" + error); this.setState({errorFetchVisible: true})})
//     }
//     componentDidMount(){
//         this.fetchData();
//     }

//     onSearch = (keyWord) => {
//         if (keyWord === "") {
//             this.setState({shownData: this.state.data});
//         } else {
//             const findItem = item => {
//                 for (const prop in item) {
//                     if (item[prop].toString().includes(keyWord)) {
//                         return true;
//                     }
//                 }
    
//                 return false;
//             }
    
//             const shownData = this.state.data.filter(findItem);
//             this.setState({shownData});
//         }

//         console.log("Search");
//         console.log(`Key: ${keyWord}`);
//     }

//     onAddItem = () => {console.log("Add item")}

//     okFetchError = () => {console.log("LOL"); this.setState({errorFetchVisible: false})}

//     render() {
//         console.log(this.context);
//         return (
//             <div className="package-specification">
//                 <HeaderComponent headerTitle={lang.PACKAGE_SPECIFICATION_TITLE} onSearch={this.onSearch}
//                                  addItemTitle={lang.PACKAGE_SPECIFICATION_ADD_ITEM_BUTTON} onAddItem={this.onAddItem} />
//                 <ListComponent data={this.props.showData} />
//                 {this.state.errorFetchVisible === true ? <FetchError visible={this.state.errorFetchVisible} onOK={this.okFetchError}/> : null}
//                 <DetailComponent title={"Chi tiết"} visible={false}/>
//             </div>
//         )
//     }
// };

// export function HeaderComponent(props) {
//     const {headerTitle, onSearch, addItemTitle, onAddItem} = props;

//     return (
//         <div className="header">
//             <PageHeader
//                 style={{padding: 0}}
//                 title={headerTitle}
//             />
//             {/* <SearchItemComponent  onSearch={onSearch} style={{float:"right", display:"inline"}}/> */}
//             <SearchContainer />
//             <AddNewItemComponent title={addItemTitle} onAddItem={onAddItem} style={{display:"inline"}}/>
//         </div>
//     );
// }


// export function SearchItemComponent(props) {
//     const {onSearch} = props;

//     return (
//         <div className="search">
//             <Search
//                 placeholder={lang.SEARCH_PLACE_HOLDER}
//                 enterButton={lang.SEARCH_ICON}
//                 onSearch={onSearch}
//                 style={{width: 300}}
//             />
//         </div>
//     )
// }

// export function AddNewItemComponent(props) {
//     const {title, onAddItem} = props;

//     return (
//         <div className="add-new-item">
//              <Button 
//                 type="primary" 
//                 style = {{backgroundColor: 'green'}}
//                 onClick = {onAddItem}
//                 >{title}
//              </Button>
//         </div>
//     )
// }


// export function ListComponent(props) {
//     const {data} = props;
//     const columns = [
//         {
//           title: lang.PACKAGE_SPECIFICATION_LIST_ORDER_NUMBER,
//           dataIndex: "orderNumber",
//           key: "order_number",
//         },

//         {
//           title: lang.PACKAGE_SPECIFICATION_LIST_PARENT_PACKAGE_SPECIFICATION,
//           dataIndex: "parentPackageSpecification",
//           key: "parent_package_specification",
//         },

//         {
//           title: lang.PACKAGE_SPECIFICATION_LIST_QUANTITY,
//           dataIndex: "quantity",
//           key: "quantity",
//         },

//         {
//             title: lang.PACKAGE_SPECIFICATION_LIST_CHILD_PACKAGE_SPECIFICATION,
//             dataIndex: "childPackageSpecification",
//             key: "child_pakage_specification",
//         },

//         {
//             title: lang.PACKAGE_SPECIFICATION_LIST_STATUS,
//             dataIndex: "status",
//             key: "status",
//             render: status => {
//                     switch (status) {
//                         case "used":
//                             return <Tag color="green">{lang.STATUS_USED}</Tag>;
//                         case "unused":
//                             return <Tag color="blue">{lang.STATUS_UNUSED}</Tag>;
//                         case "blocked":
//                             return <Tag color="red">{lang.STATUS_BLOCKED}</Tag>;
//                         default:
//                             return <Tag color="green">{lang.STATUS_USED}</Tag>;
//                     }
//                 }
//         },

//         {
//             title: lang.PACKAGE_SPECIFICATION_LIST_ACTION,
//             dataIndex: "action",
//             key: "action",
//             render: action => {
//                 // const deleteButton = action.delete === true ? <Button style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</Button> : <Button disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</Button>;
//                 const deleteButton = action.delete === true ? <DeleteButtonComponent style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</DeleteButtonComponent> : <DeleteButtonComponent disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</DeleteButtonComponent>;
//                 const activeButton = action.block === true ? <Button style={{backgroundColor: "green", color: "white"}}>{lang.BUTTON_ACTIVE}</Button> : <Button style={{backgroundColor: "yellow"}}>{lang.BUTTON_DEACTIVE}</Button>;
//                 const detailButton = action.detail === true ? <Button style={{backgroundColor: "green", color: "white"}}>{lang.BUTTON_DETAIL}</Button> : <Button disabled={true} style={{backgroundColor: "yellow"}}>{lang.BUTTON_REMOVE}</Button>;

//                 return <span><span>{deleteButton}</span> <span>{activeButton}</span> <span>{detailButton}</span></span>;
//             }
//         },
//       ];

//     return (
//        <Table columns={columns} dataSource={data} />
//     );
// }

// export function FetchError(props) {
//     const {error, visible, onOK} = props;

//     return (
//         <Modal
//             title="Lỗi tải dữ liệu"
//             visible={visible}
//             onOk={onOK}
//         >
//             <Result
//             status="warning"
//             title={lang.PACKAGE_SPECIFICATION_FETCH_ERROR}
//             />
//         </Modal>
//     )

// }

// export function DetailComponent(props) {
//     const {title, visible} = props;

//     return (
//         <Modal
//         title={title}
//         visible={visible}
//         >
//         <Form layout="inline">
//             <Form.Item label="Sản phẩm">
//                 <Input placeholder="Nhập tên sản phẩm" />
//             </Form.Item>

//             <Form.Item label="Khối lượng">
//                 <Input placeholder="Nhập khối lượng" defaultValue={10}/>
//             </Form.Item>

//             {/* <Form.Item label="Quy cách con">
//                 <Select defaultValue="Không có" style={{ width: 120 }}>
//                     <Option value="Không có">Không có</Option>
//                     <Option value="Thùng">Thùng</Option>
//                     <Option value="Lon">Lon</Option>
//                     <Option value="Gói">Gói</Option>
//                 </Select>
//             </Form.Item> */}
//         </Form>
//     </Modal>
//     )
// }

// export class DeleteButtonComponent extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             showDeleteConfirm: false,
//             showDeleteFail: false,
//             showDeleteSuccess: false
//         };
//     }

//     fetchData= () => {
//         fetch(PACKAGE_SPECIFICATION_DELETE_URL)
//         .then(response => response.json())
//         .then(result => {console.log(result); result.success === true? this.showDeleteSuccess() : this.showDeleteFail(result.message)})
//         .catch(error=> {console.log("Fetch fail" + error); this.setState({errorFetchVisible: true})})
//     } 

//     handaleDeleteClick = () => this.setState({showDeleteConfirm:true})
//     handleModalOK = () => {
//         this.fetchData();
//         this.setState({showDeleteConfirm:false})
//     }
//     handleModalCancel = () => this.setState({showDeleteConfirm:false})

//     showDeleteFail = (message) => {
//         notification['error']({
//             message: 'Xóa quy cách thất bại',
//             description:message,
//           });
//     }
    
//     showDeleteSuccess = () => {
//         notification['success']({
//             message: 'Xóa quy cách thành công',
//             description:
//               'Xóa quy cách thành công.',
//           });
//     }

//     render() {
//         return(
//             <span>
//                  <Button onClick={this.handaleDeleteClick} style={{backgroundColor: "green" , color: "white"}}>{lang.BUTTON_REMOVE}</Button>
//                  <Modal
//                     title="Xóa quy cách"
//                     visible={this.state.showDeleteConfirm}
//                     onOk={this.handleModalOK}
//                     onCancel={this.handleModalCancel}
//                  >
//                     {"Bạn muốn xóa quy cách"}
//                  </Modal>
//             </span>
//         );
//     }
// }

// const mapStateToProps= (state) => {
//     return {
//         data: state.data,
//         showData: state.shownData
//     }
// }

// const XXX = connect(mapStateToProps, null)(MainComponent);
// export {XXX}

class MainContent extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        this.props.fetchData();
    }

    componentWillUnmount() {
        this.props.closePage();
    }

    render() {
        return (
            <div>
                <List data={ this.props.data } />
                {/* <FetchError /> */}
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    return {
        data: state.data,
        loadingSuccess: state.loadingSuccess
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchData: () => {
            fetch( PACKAGE_SPECIFICATION_URL )
            .then( response => response.json() ) 
            .then( result => {
                const data = Object.keys( result ).map( key => result[key] );
                dispatch( showFetchDataSuccess( data ) )
            })
            .catch(error=> dispatch( showFetchDataError() ) )
        },

        closePage: () => dispatch(closePage())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContent);