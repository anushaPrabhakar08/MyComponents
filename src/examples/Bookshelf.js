import React, { Component } from "react";
import Bookshelf from "../components/Bookshelf";
import "./examples.css";

class Bookshelfexample extends Component {
  constructor(props) {
  super(props);


}

  render() {
    return (
    <div>
        <Bookshelf></Bookshelf>
    </div>
    );
  }
}

export default Bookshelfexample;
