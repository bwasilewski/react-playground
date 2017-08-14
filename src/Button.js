import React from 'react'

class Button extends React.Component {
    render() {
        return(<button id={this.props.id} className="button">{this.props.value}</button>);
    }
}

export default Button
