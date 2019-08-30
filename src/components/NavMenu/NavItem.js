import React, { Component } from "react";
import { dashboardSelected } from "../imageConstant";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class NavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemData } = this.props;

    return (
      <React.Fragment>
        <li class="bui-navbar-li">
          <Link class="bui-navbar-li-a" to={itemData.url}>
            <img src={itemData.icon} class="bui-navbar-icon" />
            <span class="bui-navbar-span">{itemData.label}</span>
          </Link>
        </li>
      </React.Fragment>
    );
  }
}

export default NavItem;
