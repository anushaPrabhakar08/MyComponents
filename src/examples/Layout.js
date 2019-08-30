import React, { Component } from "react";

// import { FlexGrid } from "mdc-neptune";
import { withRouter } from "react-router-dom";
import NavMenu from "./../components/NavMenu";
import Header from "./../components/Header";

import {
  home,
  dashboard,
  effortmanagement,
  feedback,
  usermanagement,
  requests,
  reports,
  configuration,
  repository
} from "./../components/imageConstant";
import "./layout.css";

class Layout extends Component {
  render() {
    const menuItems = [
      {
        label: "DashBoard",
        url: "./",
        icon: dashboard,
        class1: "inactive"
      },
      {
        label: "Accordions",
        url: "./accordions",
        icon: requests,
        class1: "inactive"
      },
      {
        label: "Bookshelf",
        url: "/bookshelf",
        icon: reports,
        class1: "inactive"
      },
      {
        label: "Button",
        url: "./button",
        icon: requests,
        class1: "inactive"
      },
      {
        label: "DropdownMenu",
        url: "/dropdownMenu",
        icon: reports,
        class1: "inactive"
      },
      {
        label: "Radiobutton",
        url: "/radiobutton",
        icon: reports,
        class1: "inactive"
      },
      {
        label: "Textbox",
        url: "/textbox",
        icon: reports,
        class1: "inactive"
      },
      {
        label: "Effort Management",
        url: "./NavMenu",
        icon: effortmanagement,
        class1: "inactive"
      },
      {
        label: "User Management",
        url: "./",
        icon: usermanagement,
        class1: "inactive"
      },
      {
        label: "Configuration",
        url: "",
        icon: configuration,
        class1: "inactive"
      },
      {
        label: "Feedback",
        url: "",
        icon: feedback,
        class1: "inactive"
      },
      {
        label: "Repository",
        url: "",
        icon: repository,
        class1: "inactive"
      }
    ];

    const { history, children } = this.props;
    return (
      <React.Fragment>
        {/* <div className="bui-layout">
          <NavMenu menuItems={menuItems} />
          <div className="bui-layout-content">
            <div className="bui-layout-header">
              <Header />
            </div>
            <div className="flex-row">
              <div xs={18} md={18}>
                {children}
              </div>
            </div>
          </div>
        </div> */}
        <div class="flex-master">
          <nav class="sidebar-left">
            <NavMenu menuItems={menuItems} />
          </nav>

          <div class="page-content">
            <header class="page-header">
              <Header />
            </header>
            <div class="content-container">
              <article class="main-content">
                {children}
              </article>
            </div>
            {/* <footer>
              <small>© West Wind Technologies, 2016</small>
            </footer> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
