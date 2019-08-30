import React, { Component } from "react";
import "./Radio.css";
import PropTypes from "prop-types";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultChecked: props.checked || false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.checked !== this.props.checked ||
      nextProps.disabled !== this.props.disabled
    ) {
      this.setState({
        defaultChecked: undefined,
        checked: nextProps.checked
      });
    }
  }

  handleClick = event => {
    // Blurs the focus ring on click while leaving
    // the blue ring when using the keyboard to navigate
    if (event.pageX !== 0 && event.pageY !== 0) {
      this.activeRadio.blur();
    }
  };

  setRef = radio => {
    this.activeRadio = radio;
  };

  render() {
    const { children, className, disabled, name, onChange, value } = this.props;
    const { checked, defaultChecked } = this.state;

    const checkedProps = {};
    if (typeof defaultChecked !== "undefined") {
      checkedProps.defaultChecked = defaultChecked;
    } else {
      checkedProps.checked = checked;
    }

    return (
      <div>
        <label className="bui-radiobutton-container">
          {value ? value : children}
          <input
            type="radio"
            name="radio"
            value={value}
            onChange={onChange}
            onClick={this.handleClick}
            {...checkedProps}
            disabled={disabled}
            ref={this.setRef}
          />
          <span
            onClick={this.toggleRadioBtn}
            className={
              this.props.disabled
                ? "bui-radiobutton-selectdisabled"
                : "bui-radiobutton-select"
            }
          />
        </label>
      </div>
    );
  }
}

const { bool, func, node, string } = PropTypes;
Radio.propTypes = {
  checked: bool,
  children: node,
  className: string,
  disabled: bool,
  name: string,
  onChange: func,
  value: string
};

Radio.defaultProps = {
  disabled: false
};

export default Radio;
