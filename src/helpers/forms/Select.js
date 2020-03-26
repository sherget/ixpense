import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class Select extends Component {
  render() {
      if (this.props.multiple) {
        return(
          <div className="form-element">
            {this.props.label ?
              <label>{this.props.label}</label>
              :
              ""
            }

            <Dropdown onChange={this.props.handleChange} id={this.props.id} placeholder={this.props.placeholder} fluid multiple selection options={this.props.options} />
          </div>
        );
      } else {
        return(
          <div className="form-element">
            {this.props.label ?
              <label>{this.props.label}</label>
              :
              ""
            }
            <Dropdown onChange={this.props.handleDropdownChange} id={this.props.id} placeholder={this.props.placeholder} fluid selection options={this.props.options} />
          </div>
        );
      }
  }
}

export default Select;
