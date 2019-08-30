import React, { Component } from "react";
import { downarrow } from "./../imageConstant";
import "./Accrodion.css";
import PropTypes from "prop-types";

class Accrodion extends Component {
  constructor(props) {
    super(props);
    if (!this.props.children) {
      throw new Error("Accordion must contain at least one Panel");
    }

    const accordionPanelStates = React.Children.map(
      this.props.children,
      (child, index) => {
        return {
          Expanded: this.props.activePanel === index,
          PanelId: index
        };
      }
    );

    this.state = {
      panelStates: accordionPanelStates
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activePanel !== nextProps.activePanel) {
      this.updateState(nextProps.activePanel);
    }
  }

  updateState(panelId, toggle = false) {
    const panelStates = this.state.panelStates.map(pState => {
      if (pState.PanelId === panelId) {
        if (toggle) {
          pState.Expanded = !pState.Expanded;
        }
      } else if (!this.props.multiExpand) {
        pState.Expanded = false;
      }

      return pState;
    });
    this.setState({ panelStates });
  }

  onExpandCollapseClick = (panel, panelId) => {
    this.updateState(panelId, true);
    if (this.props.onItemExpandCollapse) {
      this.props.onItemExpandCollapse(panel);
    }
  };

  getChildren(ariaControlsID) {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        collapsible: true,
        expanded: this.state.panelStates[index].Expanded,
        onExpandCollapseAccordionClick: this.onExpandCollapseClick,
        panelId: index,
        ariaControls: ariaControlsID,
        hover: child.props.hover !== false
      })
    );
  }

  getPanels() {
    const randomID = "67847856";
    const ariaControlsID = randomID;
    const alteredChildPanels = this.getChildren(ariaControlsID);
    const panels = alteredChildPanels.map((panel, index) => {
      return (
        <div
          key={index}
          id={`accordion-control${randomID}`}
          aria-expanded={panel.props.expanded}
          aria-controls={panel.props.title + ariaControlsID}
        >
          {panel}
        </div>
      );
    });

    return panels;
  }
  render() {
    const { name, value } = this.props;

    return (
      <div className="bui-accordion-container">
        {this.getPanels()}
        {/* <input
          type="checkbox"
          className="bui-accordion-checkbox"
          id="bui-accordion-chk1"
          value={value}
        />
        <label for="bui-accordion-chk1" className="bui-accordion-label">
          {this.props.name}
          <img className="bui-accordion-arrow" src={downarrow} />
        </label>
        <div className="bui-accordion-panel"> </div> */}
      </div>
    );
  }
}
const { number, oneOfType, arrayOf, string, bool, func, element } = PropTypes;
Accrodion.propTypes = {
  activePanel: number,
  children: oneOfType([element, arrayOf(element)]).isRequired,
  className: string,
  multiExpand: bool,
  onItemExpandCollapse: func
};

export default Accrodion;
