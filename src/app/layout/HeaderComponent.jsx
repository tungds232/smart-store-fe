import React from 'react';

import { Layout, Icon} from 'antd';

import DropDownComponent from "./DropDownComponent";

const { Header } = Layout;

function HeaderComponent() {

  const dropDownItems = [
    {
      content: <Icon type="setting" />,
      items: [
        {
          icon: null,
          content: "Setting One",
        },
        {
          icon: null,
          content: "Setting One",
        }
      ]
    },

    {
      content: (
        <div>
          <img src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" style={{width: "25px", borderRadius: "50%"}} alt="user" />
          Username
        </div>
      ),
      items: [
        {
          icon: "user",
          content: "Information",
        },
        {
          icon: null,
          content: "Logout",
        }
      ]
    }
  ];

  const dropDown = dropDownItems.map((dropDownItem, index) => <DropDownComponent key={index} dropDownItem={dropDownItem} />)

  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <div id="dropdown-group">
        {dropDown}
      </div>
      {/* <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
          <span className="caret" /></button>
        <ul className="dropdown-menu">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      </div> */}
    </Header>
  );
}

export default HeaderComponent;