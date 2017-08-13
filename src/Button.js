import React, { Component } from 'react'

class Button extends Component {
    render() {
        return(<button id={this.props.id} className="button">{this.props.value}</button>);
    }
}

export default Button