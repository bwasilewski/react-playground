import React from 'react'
import PageHome from './Page-Home'
import PageAbout from './Page-About'
import PageContact from './Page-Contact'
import Navigation from './Navigation'
import _ from 'underscore'
// import logo from './logo.svg'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            greeting: 'Hello'
        }
    }
    render() {
        const path = this.detectPage()
        let content

        console.log('State: ', this.state)

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
        return window.location.pathname
    }
}

export default App;
