import React from 'react'
import './Form.css'

class Form extends React.Component {
    render() {
        return(
            <form id={this.props.id} className="Form form">
                {this.props.children}
            </form>
        )
    }
}

export default Form
