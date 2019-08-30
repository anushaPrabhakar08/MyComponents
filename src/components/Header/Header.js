import React, { Component } from "react";
import DummyIcon from "../../assets/images/Dummy Icon.svg";

//import "./Header.css";

class Header extends Component {
  render() {
    const menuItems = [
      {
        label: "DashBoard",
        icon: DummyIcon
      },
      {
        label: "Edit Profile",
        icon: DummyIcon
      },
      {
        label: "Setting",
        icon: DummyIcon
      },
      {
        label: "Logout",
        icon: DummyIcon
      }
    ];
    return (
      <div class="bui-navbar-divheader">
        <div class="bui-navbar-buttons">
          <button class="bui-navbar-secondarybutton"> Create Request </button>
          <button class="bui-navbar-header-buttonicon">
            <img src={DummyIcon} alt="icon" />
          </button>
          <div class="bui-navbar-profile">
            <button class="bui-navbar-header-buttonprofile">MD</button>
            <div class="bui-navbar-dropdown-content">
              <a class="bui-navbar-profile-a-profilename" href="#">
                <span class="bui-navbar-profile-span_profile">
                  Profile Name
                </span>
                <img
                  src={DummyIcon}
                  alt="icon"
                  class="bui-navbar-profilebutton-icon-name"
                />
              </a>
              {menuItems.map((item, index) => (
                <a class="bui-navbar-profile-a" href="#">
                  <img
                    src={item.icon}
                    alt="icon"
                    class="bui-navbar-profilebutton-icon"
                  />
                  <span class="bui-navbar-profile-span">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
