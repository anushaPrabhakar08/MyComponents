import React, { Component } from "react";

import "./NavMenu.css";

import NavItem from "./NavItem";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { dataProvider: props.menuItems };
  }
  render() {
    const rows = [];
    console.log(this.state.dataProvider);
    this.state.dataProvider.map((item, index) => {
      rows.push(
        <NavItem
          itemData={item}
          key={index}
          //   onClickHandler={this.updateActiveStatus}
          //   tabIndex={index}
        />
      );
    });
    return (
      <div class="bui-navbar-sidebar">
        <input
          type="checkbox"
          class="bui-navbar-checkbox_bottom"
          id="bui-navbar-checkboxtoggle_bottom"
        />
        <ul class="bui-navbar-ul">
          <li class="bui-navbar-li bui-navbar-li-logo">
            <a class="bui-navbar-li-a-logo">
              <div class="bui-navbar-icon-logo" />
            </a>
          </li>
          {rows}
          <li class="bui-navbar-toggle_bottom">
            <div class="bui-navbar-toggle_bottom_icon">
              <div class="bui-navbar-expandarrow" />
              <label
                class="bui-navbar-pin"
                for="bui-navbar-checkboxtoggle_bottom"
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
