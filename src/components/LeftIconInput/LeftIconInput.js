import React, {Component} from 'react';
import Input from '../Input';

import './LeftIconInput.css';

export default class LeftIconInput extends Component {


  render() {
    const {icon, ...otherProps} = this.props;

    return (
      <div className="LeftIconInput">
        <div className="LeftIconInput-Icon">{icon}</div>
        <Input className="LeftIconInput-Input" {...otherProps}/>
      </div>
    );
  }
}