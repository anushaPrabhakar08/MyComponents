import React, { Component } from "react";
import "./RadioGroup.css";
import PropTypes from "prop-types";

class RadioGroup extends Component {
  getRadioToggles() {
    return React.Children.map(this.props.children, (radio, index) => {
      return React.cloneElement(
        radio,
        {
          key: `item-${index}`
        },
        radio.props.children
      );
    });
  }

  render() {
    const { className, vertical } = this.props;
    const orientStyle = vertical ? "radioVertical" : "radioHorizontal";

    return (
      <div data-nep="RadioGroup" className={orientStyle}>
        {this.getRadioToggles()}
      </div>
    );
  }
}
const { arrayOf, bool, element, string } = PropTypes;
RadioGroup.propTypes = {
  children: arrayOf(element),
  className: string,
  vertical: bool
};

export default RadioGroup;

// Props same as neptune
// disabled
// name
// value
// vertical
