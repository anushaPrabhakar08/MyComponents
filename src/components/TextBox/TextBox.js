import React, { Component, Fragment } from "react";
import "./TextBox.css";
import PropTypes from "prop-types";
import { typeAlias } from "@babel/types";

class TextBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      type,
      value,
      icon,
      input,
      labeltext,
      style,
      placeholder,
      div
    } = this.props;

    return (
      <Fragment>
        <div className="bui-Main-div">
          {this.props.input === "input" ||
          this.props.input === "required" ||
          this.props.input === "charcount" ||
          this.props.input === "helper" ||
          this.props.input === "iconsign" ? (
            <div className={`bui-textbox bui-textbox-${value}`}>
              <label className={`bui-textbox-label-${value}`}>
                {labeltext}
                <span className={`bui-span-label-${input}`}>*</span>
              </label>
              <div className={`bui-textbox-div${div}`}>
                <input
                  type={`${style}`}
                  className={
                    this.props.input === "input" ||
                    this.props.input === "required" ||
                    this.props.input === "charcount" ||
                    this.props.input === "helper"
                      ? `bui-textbox-${type}-${value} bui-textbox-input-${type} bui-input-${type}`
                      : `bui-textbox-${type}-icon-${value} bui-textbox-input-${type}-icon bui-input-${type}-icon`
                  }
                  placeholder={`${placeholder}`}
                />

                {this.props.input === "helper" ? (
                  <div>
                    <span className={`bui-labelsize ${value}`}>HelperText</span>
                    <span className={`bui-textbox-${type}-${icon} ${value}`} />
                  </div>
                ) : this.props.input === "charcount" ? (
                  <span className={`bui-labelsize-count ${value}`}>0/40</span>
                ) : this.props.input === "iconsign" ? (
                  <span
                    className={`bui-textbox-${type}-icon-${icon} ${value}`}
                  />
                ) : (
                  <span className={`bui-textbox-${type}-${icon} ${value}`} />
                )}
              </div>
            </div>
          ) : (
            <div className={`bui-textbox bui-textbox-${value}`}>
              <label className={`bui-textbox-label-${value}`}>
                {labeltext}
              </label>
              <div className="bui-textbox-div">
                <textarea
                  type="text"
                  className={`bui-textbox-textarea-${type} bui-textbox-textarea-${type}-${value}`}
                  placeholder="Enter a text"
                />
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

TextBox.defaultProps = {
  type: "filled",
  labeltext: "Label",
  style: "text",
  placeholder: "enter a text",
  div: ""
};

const { string, oneOf } = PropTypes;

TextBox.propTypes = {
  type: oneOf(["filled", "outlined"]),
  className: string,
  // type: oneOf(['password', 'text']),
  // height: oneOfType([string, number]),
  // multiline: bool,
  // name: string,
  // onClick: func,
  // onBlur: func,
  // onChange: func,
  // onEnter: func,
  // onFocus: func,
  // turnOnFocus: bool,
  placeholder: string,
  // search: bool,
  // highlight: bool,
  value: string
  // width: oneOfType([string, number]),
  // maxLength: oneOfType([string, number]),
};
export default TextBox;
