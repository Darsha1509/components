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
      this.setState({ textSelect: e.target.textContent });
      const variants = document.getElementById("listOfItems");
      const toChangeElem = variants.getElementsByClassName(
        "Dropdown-Options-Item_selected"
      );
      console.log(toChangeElem);
      toChangeElem[0].classList.remove("Dropdown-Options-Item_selected");
      e.target.classList.add("Dropdown-Options-Item_selected");
    };

    this.keyArrowHandler = e => {
      let variants = document.getElementById("listOfItems");
      let innerElems = variants.getElementsByClassName("Dropdown-Select");
      let selectedIndex = 0;
      const arrFromCollection = Array.from(innerElems);

      arrFromCollection.forEach((item, index) => {
        if (item.classList.contains("Dropdown-Options-Item_selected")) {
          selectedIndex = index;
        }
      });

      if (e.keyCode === 40 && selectedIndex !== arrFromCollection.length - 1) {
        innerElems[selectedIndex].classList.remove(
          "Dropdown-Options-Item_selected"
        );
        innerElems[selectedIndex + 1].classList.add(
          "Dropdown-Options-Item_selected"
        );
      }

      if (e.keyCode === 38 && selectedIndex !== 0) {
        innerElems[selectedIndex].classList.remove(
          "Dropdown-Options-Item_selected"
        );
        innerElems[selectedIndex - 1].classList.add(
          "Dropdown-Options-Item_selected"
        );
      }

      if (e.keyCode === 13) {
        this.setState({ textSelect: innerElems[selectedIndex].textContent });
      }

     if (e.keyCode === 27) {
      this.setState(() => {
       return { display: "hide" };
      });
      document.getElementById("selectTab").focus();
     }

     const NAVIGATION = [38, 40];

     document.body.addEventListener("keydown", (e) => {
       if(-1 !== NAVIGATION.indexOf(e.keyCode)){
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
        let classNameValue = "Dropdown-Select Dropdown-Options-Item";
        if (index === 0) {
          classNameValue =
            "Dropdown-Select Dropdown-Options-Item Dropdown-Options-Item_selected";
        }
        return (
          <li
            id={`id_${index}`}
            className={classNameValue}
            key={`key_${index}`}
            onClick={this.selectItemHandler}
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
         id="selectTab"
          className={`Dropdown-Select ${classSelectValue}`}
          tabIndex="0"
          onKeyDown={this.keyEnterHandler}
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
