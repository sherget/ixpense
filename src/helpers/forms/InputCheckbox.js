import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

class InputCheckbox extends Component {
  render() {
    return(
        <Checkbox
          label={{ children: this.props.label}}
          id={this.props.id}
        />
    )
  }
}


export default InputCheckbox

