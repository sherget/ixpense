import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

class InputText extends Component {
  render() {
    return(
      <div className="form-element">
      {this.props.label ?
        <label>{this.props.label}</label>
      :
        ""
      }
      <Input id={this.props.id} className={this.props.className} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputText;
