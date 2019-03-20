import React, { Component } from "react";
import Button from "../Button";

export default class ButtonExample extends Component {

  constructor(){
    super();

    this.myRef = React.createRef();
  }

  componentDidMount(){
    console.log(this.myRef);
  }

  render() {

    return (
      <Button size="large" ref={this.myRef}>
        Default
      </Button>
    );
  }
}
