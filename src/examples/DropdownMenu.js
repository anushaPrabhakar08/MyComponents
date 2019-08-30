import React, { Component } from 'react';
import Dropdown from "../components/DropdownMenu";


class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menuItems = [
      {
        label: "item1"

      },
      {
        label: "item2"

      },

      {
        label: "item3"

      },

      {
        label: "item4",
        submenuitems: [
          {
            sublabel: "subitem1"
          },
          {
            sublabel: "subitem2"
          },
          {
            sublabel: "subitem3"
          },
          {
            sublabel: "subitem4"
          }
        ]
      },
      {
        label: "item5",
        submenuitems: [
          {
            sublabel: "subitem12"
          },
          {
            sublabel: "subitem22"
          },
          {
            sublabel: "subitem32"
          },
          {
            sublabel: "subitem42"
          }
        ]
      }
    ];
    return (
      <div>
        <div className="bui-dropdown">
          <div className="bui-dropdown-dropbtn">Menu
                 <span className={`bui-icon-arrow`}></span>
          </div>
          <Dropdown
            btntype="bui-dropdown-dropbtn"
            type="bui-dropdown-TextlistContent"
            optionList="bui-dropdown-textlist"
            value="normal"
            icon="arrow"
            menuItems={menuItems}>
          </Dropdown>
        </div>
        <div className="bui-dropdown">
          <div className="bui-dropdown-dropbtn">Menu
                 <span className={`bui-icon-arrow`}></span>
          </div>
          <Dropdown
            btntype="bui-dropdown-dropbtn"
            type="bui-dropdown-TextIconlistContent"
            optionList="bui-dropdown-texticonlist"
            value="normal"
            icon="arrow"
            icondummy="dummyicon"
            menuItems={menuItems}>
          </Dropdown>
        </div>
        <div className="bui-dropdown">
          <div className="bui-dropdown-keycmddropbtn">Menu
                 <span className={`bui-icon-arrow`}></span>
          </div>
          <Dropdown
            btntype="bui-dropdown-keycmddropbtn"
            type="bui-dropdown-keyboardCmdlistContent"
            optionList="bui-dropdown-texticonkeycmdlist"
            value="normal"
            icon="arrow"
            icondummy="dummyicon" keycmd
            icondummy1="cascadingicon"
            menuItems={menuItems}>
          </Dropdown>
        </div>
        <div className="bui-dropdown">
          <div className="bui-dropdown-selectstatedropbtn">Menu
                 <span className={`bui-icon-arrow`}></span>
          </div>
          <Dropdown
            btntype="bui-dropdown-selectstatedropbtn"
            type="bui-dropdown-selectionStateContent"
            optionList="bui-dropdown-selectionStatelist"
            value="hover"
            icon="arrow"
            icondummy="cascadingicon" selectionstate
            menuItems={menuItems}
          >
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default DropdownMenu;