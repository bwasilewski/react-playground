import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
    render() {
        return(
            <div className="navigation tabs">
                <nav className="tabs-nav">
                    <a onClick={this.onNavClick} className={this.props.path === '/' || this.props.path === '/home' ? 'active' : ''} id="home">Home</a>
                    <a onClick={this.onNavClick} className={this.props.path === '/about' ? 'active' : ''} id="about">About</a>
                    <a onClick={this.onNavClick} className={this.props.path === '/contact' ? 'active' : ''} id="contact">Contact</a>
                </nav>
            </div>
        )
    }
    setPath(id) {
        let currentpage = document.getElementById(id)
        currentpage.setAttribute('class', 'active')
    }
    onNavClick(ev) {
        let target = ev.currentTarget
        let targetid = target.getAttribute('id')
        let siblings = target.parentNode.childNodes

        siblings.forEach(function (child) {
            console.log('Child: ', child)
            if (child === target) {
                child.setAttribute('class', 'active');
            } else {
                child.removeAttribute('class');
            }
        })

        window.location.pathname = '/' + targetid
    }
}

export default Navigation
