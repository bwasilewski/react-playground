import React from 'react'
import Button from './Button'

class PowerButton extends Button {
    render() {
        return <button id={this.props.id} className="button-power">{this.props.value}</button>
    }
}

export default PowerButton
