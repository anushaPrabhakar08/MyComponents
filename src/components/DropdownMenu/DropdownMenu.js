import React, { Component } from 'react';
import './DropdownMenu.css';

class Dropdown extends Component {
constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
}

//  handleClick() {
//    // e.preventDefault();
//    //this.setState({data: 'Data updated...'})
//     console.log('The link was clicked.');
//   }

handleClick = () => {
    console.log('inside func');
    if (this.props.onclick) {
        //input[name= "subradiobutton"] 
    }
}

render() {
    const {
        type,
        optionList,
        value,
        icon,
        icondummy,
        keycmd,
        selectionstate,
        onClick
    } = this.props;

    let menuItems = this.props.menuItems;
    menuItems = menuItems !== undefined && menuItems.length > 0 ? menuItems : [];
    const handleClick = this.handleClick;

    return (
        <div>
            <div className={type} >

                {selectionstate !== undefined ?

                    menuItems.map(function (menuItem, i) {
                        return (menuItem.submenuitems !== undefined && menuItem.submenuitems.length > 0) ?
                            <div className="bui-dropdown-showsubmenu" key={'submenu-${menuItem.label}-${1}'}>
                                <a key={'submenu-a-' + menuItem.label + '-' + i} >
                                    <label className={'bui-dropdown-selectioncontainer ' + optionList + '-' + value}>
                                        {icondummy != undefined ? <span className={'bui-icon-' + icondummy}></span> : null}
                                        {menuItem.label}
                                        <input type="radio" name="radiobutton" />
                                        <span className="bui-dropdown-selectmark"></span>
                                    </label>
                                </a>

                                <div className="bui-dropdown-submenuContent">
                                    {menuItem.submenuitems.map(function (subMenu, i) {
                                        return (
                                            <a key={'submenu-content-' + menuItem.label + '-' + i} >
                                                <label className={'bui-dropdown-selectioncontainer ' + optionList + '-' + value}>
                                                    {subMenu.sublabel}
                                                    <input type="radio" name="subradiobutton" key="1" onClick={handleClick}
                                                    />
                                                    {/* <h4>{this.state.data}</h4> */}
                                                    <span className="bui-dropdown-selectmark" ></span>
                                                </label>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>

                            :
                            <a key={menuItem.label + '-' + i}>
                                <label className={'bui-dropdown-selectioncontainer ' + optionList + '-' + value}>
                                    {menuItem.label}

                                    <input type="radio" name="radiobutton" />
                                    <span className="bui-dropdown-selectmark"></span>
                                </label>
                            </a>
                    })

                    :

                    menuItems !== undefined && menuItems.length > 0 ? menuItems.map((menuItem, index) => {
                        return (
                            <a className={optionList + '-' + value} key={menuItem.label + '-' + index}>
                                {this.props.icondummy != undefined ? <span className={'bui-icon-' + icondummy}></span> : null}
                                <label> {menuItem.label}</label>
                                {keycmd != undefined ? <span className="bui-dropdown-keyboardcmd">Ctrl+X</span> : null}

                            </a>)

                    }) : null
                }
            </div>
        </div>
    );
}
}
export default Dropdown;