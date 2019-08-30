import React, { Component, Fragment } from "react";
import { downarrow } from "../imageConstant";
import PropTypes from "prop-types";

class Panel extends Component {
  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  renderIcon() {
    const { disabled, expanded } = this.props;
    const iconName = expanded ? "caret-down" : "caret-right";

    return <img className="title-text" name={iconName} inherit />;
  }

  renderTitleLabel() {
    const { disabled, name } = this.props;
    const titleLabelClassName = "title-text";

    return <span className={titleLabelClassName}>{name}</span>;
  }

  renderTitle() {
    const disabled = this.props.disabled;

    if (this.props.collapsible) {
      return (
        <div
          onClick={this.handleExpandCollapseClick}
          onKeyDown={this.handleKeyDown}
          ref={panel => {
            this.activePanel = panel;
          }} // eslint-disable-line react/jsx-no-bind
          tabIndex={disabled ? -1 : 0}
        >
          <div className="arrow-icon">{this.renderIcon()}</div>
          <div className="pull-left">{this.renderTitleLabel()}</div>
        </div>
      );
    }

    return <div className="arrow-icon">{this.renderTitleLabel()}</div>;
  }

  renderSubTitle() {
    if (this.props.subTitle) {
      return <div className="sub-title">{this.props.subTitle}</div>;
    }

    return null;
  }

  handleKeyDown = event => {
    if (event.which !== 9) {
      event.preventDefault();
      this.keyboardEvents(event);
      this.activePanel.focus();
    }
  };

  handleExpandCollapseClick = () => {
    this.activePanel.blur();
    if (this.props.disabled) {
      return;
    }

    if (this.props.onExpandCollapseClick) {
      this.props.onExpandCollapseClick(this, this.props.panelId);
    }

    if (this.props.onExpandCollapseAccordionClick) {
      this.props.onExpandCollapseAccordionClick(this, this.props.panelId);
    }
  };

  render() {
    const {
      disabled,
      className,
      expanded,
      collapsible,
      hover,
      ariaControls,
      title
    } = this.props;
    const accordianContentClassName = expanded
      ? "panel-content-expand"
      : "panel-content-collapse";
    const hoverHeaderClassName = hover && !disabled ? "header-hover" : "";

    return (
      <div data-nep="Panel" className="panel">
        <div className="panel-title">
          {this.renderTitle()}
          {this.renderSubTitle()}
        </div>
        <div
          className="panel-content"
          aria-hidden={!expanded} // aria attribute for accessibility
          id={title + ariaControls} // id attribute for aria control from accordion accessibility
        >
          <div className="accordianContentClassName">{this.props.children}</div>
        </div>
      </div>
    );
  }

  //   render() {
  //     const { name } = this.props;
  //     return (
  //       <Fragment>
  //         <input
  //           type="checkbox"
  //           class="bui-accordion-checkbox"
  //           id="bui-accordion-chk1"
  //           value={name}
  //         />
  //         <label for="bui-accordion-chk1" class="bui-accordion-label">
  //           {this.props.name}
  //           <img class="bui-accordion-arrow" src={downarrow} />
  //         </label>
  //         <div class="bui-accordion-panel"> </div>
  //       </Fragment>
  //     );
  //   }
}
const { any, string, bool, func, number, object, oneOfType } = PropTypes;
Panel.propTypes = {
  children: any,
  className: string,
  collapsible: bool,
  disabled: bool,
  expanded: bool,
  hover: bool,
  onExpandCollapseAccordionClick: func,
  onExpandCollapseClick: func,
  panelId: number,
  subTitle: oneOfType([string, object]),
  title: oneOfType([string, object]),
  ariaControls: string
};

Panel.defaultProps = {
  collapsible: false,
  expanded: true,
  disabled: false
};

export default Panel;
