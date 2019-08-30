import React, { Component } from "react";
import "./Checkbox.css";
import PropTypes from "prop-types";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
      indeterminate: props.indeterminate
    };
    if (this.props.onclick) {
      console.warn(
        "CheckBox 'onclick' event has been deprecated. Please use onChange event instead."
      );
    }
  }

  componentDidMount() {
    if (this.props.indeterminate) {
      this.setIndeterminate(this.props.indeterminate);
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.indeterminate !== this.props.indeterminate) {
      this.setIndeterminate(this.props.indeterminate);
    }
  }

  componentWillReceiveProps(nextProps) {
    // only update if component manages its own state
    if (!this.props.readonly) {
      if (
        nextProps.checked !== this.props.checked ||
        nextProps.disabled !== this.props.disabled
      ) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }

    const checkbox = this.checkbox;
    if (checkbox.indeterminate && !nextProps.indeterminate) {
      checkbox.indeterminate = false;
    }

    if (
      nextProps.indeterminate &&
      nextProps.indeterminate !== this.props.indeterminate
    ) {
      checkbox.indeterminate = nextProps.indeterminate;
    }
  }

  setIndeterminate(isIndeterminate) {
    const checkbox = this.checkbox;
    checkbox.indeterminate = isIndeterminate;
  }

  handleChange = event => {
    let checked = this.props.checked;
    if (!this.props.readonly) {
      checked = !this.state.checked;
      this.setState({
        checked,
        indeterminate: false
      });
    }

    if (this.props.onChange) {
      this.props.onChange(event, checked, this.props.value);
    } else if (this.props.onclick) {
      this.props.onclick(event, checked, this.props.value);
    }
  };

  render() {
    const {
      className,
      compact,
      disabled,
      labelRenderer,
      name,
      readonly,
      text,
      value,
      dataLayerTag
    } = this.props;
    const { indeterminate } = this.state;

    //DE88030
    const checked = readonly ? this.props.checked : this.state.checked;

    return (
      <div className="bui-btn-box">
        <div>
          <label className="bui-checkbox-container">
            {this.props.name}
            <input
              type="checkbox"
              checked={checked}
              value={value}
              aria-checked={indeterminate ? "mixed" : checked}
              disabled={disabled}
              onClick={this.handleChange}
              onChange={this.handleNoop}
              ref={this.setRef}
            />
            <span
              className={
                this.props.disabled
                  ? "bui-checkbox-checkmark bui-checkmark-disabled"
                  : "bui-checkbox-checkmark bui-checkmark-normal"
              }
            />
          </label>
        </div>
      </div>
    );
  }
}

const { func, string, number, bool, oneOfType, object } = PropTypes;
Checkbox.propTypes = {
  className: string,
  checked: bool,
  disabled: bool,
  name: string,
  onChange: func,
  text: oneOfType([string, number]),
  labelRenderer: func,
  value: oneOfType([string, number]),
  readonly: bool,
  indeterminate: bool,
  compact: bool,
  dataLayerTag: object
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  compact: false
};

export default Checkbox;

{
  /* <div
data-nep="Checkbox"
className={cx(className, 'checkbox-container', { compact })}
onMouseOut={this.handleMouseOut}
{...elementProps}
>
<input
  type="checkbox"
  id={name ? name + ID : ID.replace('_', '')} // <-- for when name prop isn't given
  checked={checked}
  value={value}
  aria-checked={indeterminate ? 'mixed' : checked}
  disabled={disabled}
  onClick={this.handleChange}
  onChange={this.handleNoop}
  ref={this.setRef}
/>
<label htmlFor={name ? name + ID : ID.replace('_', '')}>
  {labelRenderer ? (
    labelRenderer(this.props, this.state)
  ) : (
    <span className={cx('text', { disabled, compact })}>{text}</span>
  )}
</label>
</div> */
}
