import React, { Component } from "react";
import Button from "../components/Button";
import "./examples.css";

class Buttonexample extends Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);

}

  handleClick(){
      
    alert("Don't Click Me");
  }
  render() {
    return (
    <div>
      <div className="container-box">
        <h3 className="heading">Buttons</h3>
        <div className="sample-container">
          <div>
            <div className="row">
              <label className="primary" >primary</label>
              <Button buttonType="primary" onClick={this.handleClick}>Primary</Button>
              <label className="primary">primary disabled</label>
              <Button buttonType="primary" disabled >Primary</Button>
            </div>
            <div className="row">
            <label className="secondary">secondary</label>
              <Button buttonType="secondary">Secondary</Button>
              <label className="secondary">secondary disabled</label>
              <Button buttonType="secondary" disabled>Secondary</Button>
            </div>
            <div className="row">
            <label className="accent">accent</label>
              <Button buttonType="accent">Accent</Button>
              <label className="accent">accent disabled</label>
              <Button buttonType="accent" disabled>Accent</Button>
            </div>
            <div className="row">
            <label className="warning">warning</label>
              <Button buttonType="warning">Warning</Button>
              <label className="warning">warning disabled</label>
              <Button buttonType="warning" disabled>Warning</Button>
            </div>
            <div className="row">
            <label className="error">error</label>
              <Button buttonType="error">Error</Button>
              <label className="error">error disabled</label>
              <Button buttonType="error" disabled>Error</Button>
            </div>
            <div className="row">
            <label className="success">success</label>
              <Button buttonType="success">Success</Button>
              <label className="success">success disabled</label>
              <Button buttonType="success" disabled>Success</Button>
            </div>
            <div className="row">
            <label className="quite">quite</label>
              <Button buttonType="quite">Quite Default</Button>
              <label className="quite">quite disabled</label>
              <Button buttonType="quite" disabled>Quite Default</Button>
            </div>
            <div className="row">
            <label className="emphasis">emphasis</label>
              <Button buttonType="emphasis"autoFocus>Quite Emphasis</Button>
              <label className="emphasis">emphasis disabled</label>
              <Button buttonType="emphasis" disabled>Quite Emphasis</Button>
            </div>
            <div className="row">
            <label className="primary">icon</label>
              <Button buttonType="icon" icon="search">Icon</Button>
              <label className="primary">icon disabled</label>
              <Button buttonType="icon" icon="search" disabled>Icon</Button>
            </div>
            <div className="row">
            <label className="primary">icon-text</label>
              <Button buttonType='icon-text' icon="edit">Icon Text</Button>
              <label className="primary">icon-text disabled</label>
              <Button buttonType="icon-text" icon="edit" disabled>Icon Text</Button>
            </div>
          </div>
        </div>
      </div>
  
      <div className="container-box">
        <div>
          <h4 className="heading">Code</h4>
          <textarea className="code-box">
          </textarea>
        </div>
      </div>
      <div className="container-box">
        <h4 className="heading">Props Button</h4>
        <div className="props-table-box">
          <table className="props-description">
            <thead>
              <tr className="table-row">
                <th className="description-header">Name</th>
                <th className="description-header">Description</th>
                <th className="description-header">Default value</th>
                <th className="description-header">Type</th>
                <th className="description-header">Required</th>
              </tr>
            </thead>
            <tbody className="description-body" >
            <tr className="table-row">
                <td className="description-details">children</td>
                <td className="description-details">The text inside the button, also the aria-label for accessibility.</td>
                <td className="description-details"></td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">className</td>
                <td className="description-details">Custom CSS class name to apply to element</td>
                <td className="description-details"></td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">disabled</td>
                <td className="description-details">When set to true button will be disabled and will no longer accept onClick events</td>
                <td className="description-details">False</td>
                <td className="description-details">Boolean</td>
                <td className="description-details">Optional</td>
              </tr>
            
              <tr className="table-row">
                <td className="description-details">icon</td>
                <td className="description-details">Icon name to display next to button label</td>
                <td className="description-details"></td>
                <td className="description-details">string</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">name</td>
                <td className="description-details">Name is the text inside the button</td>
                <td className="description-details">Button</td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">value</td>
                <td className="description-details">value is the name/value of the button</td>
                <td className="description-details"></td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">style</td>
                <td className="description-details">style is the inline styles for that respective button</td>
                <td className="description-details"></td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">onClick</td>
                <td className="description-details">Callback that will be invoked when user clicks on the button.</td>
                <td className="description-details"></td>
                <td className="description-details">function</td>
                <td className="description-details">Required</td>
              </tr>
              
              <tr className="table-row">
                <td className="description-details">buttonType</td>
                <td className="description-details">buttonType is different styles of button like Primary, Secondary, Signal, Quite and icon buttons.</td>
                <td className="description-details">primary</td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">type</td>
                <td className="description-details">Type of a button</td>
                <td className="description-details"></td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
}

export default Buttonexample;
