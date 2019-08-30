import React, { Component } from "react";
import "./Button.css";
import PropTypes from "prop-types";
import { Number } from "core-js";
import idGen from "../idGen";

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = {
        btnId:0
      };
    }
    
    componentWillMount() {
      this.id = idGen();
    }
  render() {
    const {
      children,
      buttonType,
      disabled,
      name,
      icon,
      style,
      value,
      onClick,
      type,
      
    } = this.props;
  

    return (
      <div>

      <button 
        className={disabled ? `bui-button bui-${buttonType}-disabled`: `bui-button bui-${buttonType}-button`} 
        disabled={disabled}
        onClick={onClick}
        style={style}
        type={type}
        value={children!=undefined? children : value!=undefined?value:name}
        data-testid={`btn-${buttonType}_${this.id}`} //testcases
      >

      {buttonType=='icon'?
        <span className={`icon bui-icon-${icon}`}></span>
      :  buttonType=='icon-text'?
      <span className={`icon bui-icon-${icon}-text`}></span>
      :
      null}
      {buttonType=='icon'?null :children!=undefined? children : name}
     
      </button>
      </div> 
    );
  }
}
  const {string, func, bool, oneOf,number } = PropTypes;
Button.propTypes = {
  buttonType:oneOf(['primary','secondary','accent','warning','error','success','quite','emphasis','icon','icon_text']),
  name: string,
  disabled: bool,
  onClick: func,
  icon: oneOf(['search','edit']),
  type: oneOf(['button','submit','reset']),
 
};

Button.defaultProps = {
  buttonType:"primary",
  disabled: false,
  name:'Button',
  onClick: () => {},
  type: 'button',
  icon:""
};

 export default Button;