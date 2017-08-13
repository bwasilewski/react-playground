import React, { Component } from 'react'
import './Title.css'

class Title extends Component {
    render() {
        const id = this.props.id || '';
        const el = React.createElement('h' + this.props.level, {
            'id': id,
            'className': 'title',
            'onClick': this.onTitleClick
        }, this.props.value)

        return el
    }
    onTitleClick(ev) {
        console.log('stop, that tickles!')
    }
}

export default Title
