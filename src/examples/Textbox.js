import React from "react";
import "./examples.css";
import TextBox from "../components/TextBox";

function App() {
  return (
    <div>
      <div className="bui-App">
        <div className="bui-App-div">
          <TextBox value="variances" input="input" />
          {/* <MyTextBox  value="hover"     input="input"/> */}
          <TextBox value="disabled" input="input" />
          <TextBox value="error" input="input" />
          {/* <MyTextBox  value="normal"    input="input"/>  */}
        </div>
        <div className="bui-App-div">
          <TextBox type="outlined" value="variances" input="input" />
          {/* <MyTextBox type="outlined" value="hover"    input="input"/>
        <MyTextBox type="outlined" value="normal"   input="input"/>  */}

          <TextBox type="outlined" value="disabled" input="input" />
          <TextBox type="outlined" value="error" input="input" />
        </div>

        <div className="bui-App-div">
          <TextBox
            value="variances"
            icon="icon"
            input="input"
            labeltext="password"
            style="password"
            placeholder="enter the password"
          />
          {/* <MyTextBox value="hover"    icon="icon"  input="input" style="password" content="enter the password"/> */}
          <TextBox
            value="disabled"
            icon="icon"
            input="input"
            labeltext="password"
            style="password"
            placeholder="enter the password"
          />
          <TextBox
            value="error"
            icon="icon"
            input="input"
            labeltext="password"
            style="password"
            placeholder="enter the password"
          />
          {/* <MyTextBox value="normal"   icon="icon"   input="input" style="password" content="enter the password"/>   */}
        </div>

        <div className="bui-App-div">
          <TextBox
            type="outlined"
            value="variances"
            icon="icon"
            input="input"
            labeltext="password"
            style="password"
            placeholder="enter the password"
          />
          {/* <MyTextBox type="outlined" value="hover"    icon="icon" input="input" style="password" content="enter the password"/>
        <MyTextBox type="outlined" value="normal"   icon="icon" input="input" style="password" content="enter the password"/>   */}
          <TextBox
            type="outlined"
            value="disabled"
            icon="icon"
            input="input"
            labeltext="password"
            style="password"
            placeholder="enter the password"
          />
          <TextBox
            type="outlined"
            value="error"
            icon="icon"
            input="input"
            labeltext="password"
            style="password"
            placeholder="enter the password"
          />
        </div>

        <div className="bui-App-div">
          <TextBox value="variances" input="textarea" />
          {/* <MyTextBox   value="hover"    input="textarea" />
        <MyTextBox   value="normal"   input="textarea" />   */}
          <TextBox value="disabled" input="textarea" disabled />
          <TextBox value="error" input="textarea" />
        </div>

        <div className="bui-App-div">
          <TextBox type="outlined" value="variances" input="textarea" />
          {/* <MyTextBox type="outlined" value="hover"   input="textarea"/>
        <MyTextBox type="outlined"  value="normal"  input="textarea"/>   */}
          <TextBox type="outlined" value="disabled" input="textarea" />
          <TextBox type="outlined" value="error" input="textarea" />
        </div>

        <div className="bui-App-div">
          <TextBox value="variances" input="required" />
          {/* <MyTextBox  value="hover"  input="required"/>
        <MyTextBox  value="normal"  input="required"/>   */}
          <TextBox value="disabled" input="required" />
          <TextBox value="error" input="required" />
        </div>

        <div className="bui-App-div">
          <TextBox type="outlined" value="variances" input="required" />
          {/* <MyTextBox type="outlined" value="hover"  input="required"/>
        <MyTextBox type="outlined"  value="normal"  input="required"/>   */}
          <TextBox type="outlined" value="disabled" input="required" />
          <TextBox type="outlined" value="error" input="required" />
        </div>

        <div className="bui-App-div">
          <TextBox value="variances" icon="help" input="helper" div="-align" />
          {/* <MyTextBox   value="hover" icon="help" input="helper"/>
        <MyTextBox    value="normal" icon="help" input="helper"/>   */}
          <TextBox value="disabled" icon="help" input="helper" div="-align" />
          <TextBox value="error" icon="help" input="helper" div="-align" />
        </div>

        <div className="bui-App-div">
          <TextBox
            type="outlined"
            value="variances"
            icon="help"
            input="helper"
            div="-align"
          />
          {/* <MyTextBox type="outlined" value="hover" icon="help" input="helper"/>
        <MyTextBox type="outlined"  value="normal" icon="help" input="helper"/>  */}
          <TextBox
            type="outlined"
            value="disabled"
            icon="help"
            input="helper"
            div="-align"
          />
          <TextBox
            type="outlined"
            value="error"
            icon="help"
            input="helper"
            div="-align"
          />
        </div>

        <div className="bui-App-div">
          <TextBox value="variances" input="charcount" div="-align" />
          {/* <MyTextBox   value="hover" input="charcount"/>
        <MyTextBox    value="normal" input="charcount"/> */}
          <TextBox value="disabled" input="charcount" div="-align" />
          <TextBox value="error" input="charcount" div="-align" />
        </div>

        <div className="bui-App-div">
          <TextBox
            type="outlined"
            value="variances"
            input="charcount"
            div="-align"
          />
          {/* <MyTextBox type="outlined" value="hover" input="charcount"/>
        <MyTextBox type="outlined"  value="normal" input="charcount"/>  */}
          <TextBox
            type="outlined"
            value="disabled"
            input="charcount"
            div="-align"
          />
          <TextBox
            type="outlined"
            value="error"
            input="charcount"
            div="-align"
          />
        </div>

        <div className="bui-App-div">
          <TextBox value="variances" icon="iconsign" input="iconsign" />
          {/* <MyTextBox   value="hover" icon="iconsign" input="iconsign"/>
        <MyTextBox    value="normal" icon="iconsign" input="iconsign"/>   */}
          <TextBox value="disabled" icon="iconsign" input="iconsign" />
          <TextBox value="error" icon="iconsign" input="iconsign" />
        </div>

        <div className="bui-App-div">
          <TextBox
            type="outlined"
            value="variances"
            icon="iconsign"
            input="iconsign"
          />
          {/* <MyTextBox type="outlined" value="hover" icon="iconsign" input="iconsign"/>
        <MyTextBox type="outlined"  value="normal" icon="iconsign" input="iconsign"/>  */}
          <TextBox
            type="outlined"
            value="disabled"
            icon="iconsign"
            input="iconsign"
          />
          <TextBox
            type="outlined"
            value="error"
            icon="iconsign"
            input="iconsign"
          />
        </div>
      </div>

      <div className="container-box">
        <div>
          <h4 className="heading">Code</h4>
        </div>
      </div>

      <div className="container-box">
        <h4 className="heading">Props TextBox</h4>
        <div className="props-table-box">
          <table className="props-description">
            <thead>
              <tr className="table-row">
                <th className="description-header">Props</th>
                <th className="description-header">Description</th>
                <th className="description-header">Default value</th>
                <th className="description-header">input</th>
                <th className="description-header">Required</th>
              </tr>
            </thead>
            <tbody className="description-body">
              <tr className="table-row">
                <td className="description-details">className</td>
                <td className="description-details">
                  Custom CSS class name to apply to element
                </td>
                <td className="description-details" />
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">icon</td>
                <td className="description-details">
                  It used to display icon over the textbox
                </td>
                <td className="description-details" />
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">input</td>
                <td className="description-details">
                  It is about the variance of textbox
                </td>
                <td className="description-details" />
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>
              <tr className="table-row">
                <td className="description-details">Placeholder</td>
                <td className="description-details">
                  It specifies either in the format text or password
                </td>
                <td className="description-details">enter a text</td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">labeltext</td>
                <td className="description-details">
                  It denotes the format of the label{" "}
                </td>
                <td className="description-details">Label</td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">type</td>
                <td className="description-details">
                  The denotes primary type of textBoxes{" "}
                </td>
                <td className="description-details">filled</td>
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">value</td>
                <td className="description-details">
                  It specifies the variance of textbox(normal,hover,pressed)
                </td>
                <td className="description-details" />
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">div</td>
                <td className="description-details">
                  It is used to align the character count{" "}
                </td>
                <td className="description-details" />
                <td className="description-details">String</td>
                <td className="description-details">Optional</td>
              </tr>

              <tr className="table-row">
                <td className="description-details">style</td>
                <td className="description-details">
                  It is used to define the input type.
                </td>
                <td className="description-details">text</td>
                <td className="description-details">String</td>
                <td className="description-details">required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
