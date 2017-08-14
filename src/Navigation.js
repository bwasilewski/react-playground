import React from 'react'
import './Navigation.css'

class Navigation extends React.Component {
    render() {
        return(
            <div className="navigation tabs">
                <nav className="tabs-nav">
                    <a href="/" className={this.props.path === '/' || this.props.path === '/home' ? 'active' : ''} id="home">Home</a>
                    <a href="/about" className={this.props.path === '/about' ? 'active' : ''} id="about">About</a>
                    <a href="/contact" className={this.props.path === '/contact' ? 'active' : ''} id="contact">Contact</a>
                </nav>
            </div>
        )
    }
    setPath(id) {
        let currentpage = document.getElementById(id)
        currentpage.setAttribute('class', 'active')
    }
    // onNavClick(ev) {
    //     window.location.pathname = '/' + ev.currentTarget.getAttribute('id')
    // }
}

export default Navigation
