import React, { Component } from "react";
import { selectIcon } from "../icons";

import "./Dropdown.css";

export default class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      display: "hide",
      textSelect: "Selected",
      selectedItem: 0
    };

    this.item_0 = React.createRef();
    this.item_1 = React.createRef();
    this.item_2 = React.createRef();

    this.selectInput = React.createRef();

    this.showOptionsHandler = () => {
      this.setState(({ display }) => {
        return display === "hide" ? { display: "show" } : { display: "hide" };
      });
    };

    this.keyEnterHandler = e => {
      if (e.keyCode === 13) {
        this.setState(() => {
          return { display: "show" };
        });
      }
      if (e.keyCode === 27) {
        this.setState(() => {
          return { display: "hide" };
        });
      }
    };

    this.selectItemHandler = e => {
      e.stopPropagation();
      this.setState({
        textSelect: e.target.textContent,
        selectedItem: e.target.id
      });
    };

    this.keyArrowHandler = e => {
      const innerElems = [
        this.item_0.current,
        this.item_1.current,
        this.item_2.current
      ];

      if (e.keyCode === 40 && this.state.selectedItem !== 2) {
        this.setState({ selectedItem: this.state.selectedItem + 1 });
      }

      if (e.keyCode === 38 && this.state.selectedItem !== 0) {
        this.setState({ selectedItem: this.state.selectedItem - 1 });
      }

      if (e.keyCode === 13) {
        this.setState({ textSelect: innerElems[this.state.selectedItem].textContent });
      }

      if (e.keyCode === 27) {
        this.setState(() => {
          return { display: "hide" };
        });
        this.selectInput.current.focus();
      }

      const NAVIGATION = [38, 40];

      document.body.addEventListener("keydown", e => {
        if (-1 !== NAVIGATION.indexOf(e.keyCode)) {
          e.preventDefault();
        }
      });
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
            className={`Dropdown-Select Dropdown-Options-Item ${
              +this.state.selectedItem === index
                ? "Dropdown-Options-Item_selected"
                : ""
            }`}
            id={index}
            key={`key_${index}`}
            onClick={this.selectItemHandler}
            ref={this[`item_${index}`]}
          >
            {item}
          </li>
        );
      });
    }

    return (
      <div
        className="Dropdown Dropdown_shadow"
        onClick={this.showOptionsHandler}
      >
        <div className="Dropdown-SelectImage">{selectIcon}</div>
        <div
          className={`Dropdown-Select ${classSelectValue}`}
          tabIndex="0"
          onKeyDown={this.keyEnterHandler}
          ref={this.selectInput}
        >
          {textSelect}
        </div>
        <div className="Dropdown-Icon">{icon}</div>
        <ul
          id="listOfItems"
          className={`Dropdown Dropdown-Options Dropdown_shadow Dropdown-Options_${display}`}
          tabIndex="0"
          onKeyDown={this.keyArrowHandler}
        >
          {optionsList}
        </ul>
      </div>
    );
  }
}
