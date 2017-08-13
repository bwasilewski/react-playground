import React, { Component } from 'react'

class Title extends Component {
    render() {
        switch (this.props.level) {
            case 1:
                return (<h1>{this.props.value}</h1>)
                break
            case 2:
                return (<h2>{this.props.value}</h2>)
                break
            case 3:
                return (<h3>{this.props.value}</h3>)
                break
            case 4:
                return (<h4>{this.props.value}</h4>)
                break
            case 5:
                return (<h5>{this.props.value}</h5>)
                break
            case 6:
                return (<h6>{this.props.value}</h6>)
                break
            default:
                return (<h1>{this.props.value}</h1>)
        }
    }
}

export default Title
