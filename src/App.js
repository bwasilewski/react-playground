import React, { Component } from 'react'
import PageHome from './Page-Home'
import PageAbout from './Page-About'
import PageContact from './Page-Contact'
import Navigation from './Navigation'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
    currentpage: window.location.pathname
    render() {
    const path = this.detectPage()
    let content

    switch (path) {
        case '/':
            content = <PageHome />
            break
        case '/about':
            content = <PageAbout />
            break
        case '/contact':
            console.log('test test')
            content = <PageContact />
            break
        default:
            content = <PageHome />
            break
    }

    return (
      <div className="App">
        <Navigation path={path}></Navigation>
        <div id="page-content-wrap">{content}</div>
      </div>
    );
    }
    detectPage() {
    console.log(window.location.pathname)
    return window.location.pathname
    }
}

export default App;
