import React from 'react';

import { Layout, Menu, Dropdown, Button, Icon, message } from 'antd';

const { Header } = Layout;

function HeaderComponent() {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <div id="components-dropdown-demo-dropdown-button">
      <Dropdown.Button className="userInfo" overlay={menu}>
      Dropdown
    </Dropdown.Button>
      </div>
    </Header>
  );
    return (
        <Header>
            <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
        <a className="navbar-brand" href="#"><strong>Navbar</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Opinions</a>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link"><i className="fab fa-facebook-f" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><i className="fab fa-twitter" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><i className="fab fa-instagram" /></a>
            </li>
          </ul>
        </div>
      </nav>
            </div>
        </Header>
    )
}

export default HeaderComponent;