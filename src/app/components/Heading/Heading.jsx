import React from "react";
import { PageHeader } from 'antd';

const {Fragment} = React;

const heading = (props) => {
    return (
        <Fragment>
            <div className="header-one">
                <PageHeader title={props.title} />
                {props.buttonCreate}
            </div>
            <div className="header-two">
                {props.search}
            </div>
        </Fragment>
    );
};

export default heading;


{/* <div>
        <div className="header-one">
            <PageHeader title="Quy cách"/>
            <NewItem />
        </div>
        <div className="header-two">
            <Search/>
        </div>
    </div> */}