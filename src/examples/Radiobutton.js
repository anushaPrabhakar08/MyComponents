import React, { Component } from "react";
import Bookshelf from "../components/Bookshelf";
import "./examples.css";
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/RadioGroup";

class Bookshelfexample extends Component {
  constructor(props) {
  super(props);


}

  render() {
    return (
    <div>
        <Radio></Radio>
        <RadioGroup></RadioGroup>
        
    </div>
    );
  }
}

export default Bookshelfexample;
