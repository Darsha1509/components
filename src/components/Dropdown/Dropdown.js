import React, { Component } from "react";
import { selectIcon } from "../icons";

import "./Dropdown.css";

export default class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      display: "hide",
      textSelect: "Selected"
    };

    this.showOptionsHandler = () => {
      this.setState(({ display }) => {
        return display === "hide" ? { display: "show" } : { display: "hide" };
      });
    };

    this.selectItemHandler = data => {
      this.setState({ textSelect: data });
    };
  }

  render() {
    const { data, icon } = this.props;
    const { display, textSelect } = this.state;

    let classSelectValue = "Dropdown-Select_withoutIcon";

    if (icon) {
      classSelectValue = "Dropdown-Select_withIcon";
    }

    let optionsList = null;

    if (data) {
      optionsList = data.map((item, index) => {
        return (
          <li
            className="Dropdown-Select Dropdown-Options-Item"
            key={`key_${index}`}
            onClick={() => this.selectItemHandler(item)}
          >
            {item}
          </li>
        );
      });
    }

    return (
      <div className="Dropdown Dropdown_shadow">
        <div className="Dropdown-SelectImage" onClick={this.showOptionsHandler}>
          {selectIcon}
        </div>
        <div className={`Dropdown-Select ${classSelectValue}`}>
          {textSelect}
        </div>
        <div className="Dropdown-Icon">{icon}</div>
        <ul
          className={`Dropdown Dropdown-Options Dropdown_shadow Dropdown-Options_${display}`}
        >
          {optionsList}
        </ul>
      </div>
    );
  }
}
