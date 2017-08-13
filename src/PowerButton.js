import React from 'react'
import Button from './Button'
import './PowerButton.css';

class PowerButton extends Button {
    engage() {
        console.log('success!');
    }
    render() {
        return <button id={this.props.id} className="button-power" onClick={this.engage}>{this.props.value}</button>
    }
}

export default PowerButton
