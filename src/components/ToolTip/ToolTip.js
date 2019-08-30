import React, { Component } from "react";
import "./ToolTip.css";
import { upload } from "../imageConstant";
import PropTypes from "prop-types";

class ToolTip extends Component {
  render() {
    return (
      <div className="bui-tooltip-container">
        <div className="bui-tooltip">
          <img
            className="bui-tooltip-image bui-tooltip-upload"
            src={upload}
            alt="upload"
          />
          <label className="bui-tooltiptext"> {this.props.tooltipText}</label>
        </div>
      </div>
    );
  }
}
ToolTip.propTypes = {
  tooltipText: PropTypes.string
};
export default ToolTip;
