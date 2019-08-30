import React, { Component } from "react";
import Accordion from "./../components/Accordion";
import Panel from "./../components/Panel";

class Accordions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Accordion
          activePanel={this.state.active}
          onItemExpandCollapse={this.onItemExpandCollapseClick}
        >
          <Panel
            name="group"
            value="group"
            onExpandCollapseClick={this.onRegionsExpandCollapseClick}
          >
            1
          </Panel>
          <Panel name="test" value="test">
            2
          </Panel>
          <Panel name="ppp" value="ppp">
            3
          </Panel>
        </Accordion>
      </div>
    );
  }
}

export default Accordions;
