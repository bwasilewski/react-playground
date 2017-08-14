import React from 'react'
import Page from './Page'
import Title from './Title'

class PageAbout extends Page {
    render() {
        return(
            <div className="page" id="page_about">
                <Title level={2} value="About Page" />
                <Title level={3} value="Welcome!" />
                <p>You have reached The Star Wars Encyclopedia. The purpose of this website is to serve as a playground for learning how to build API-powered React applications.</p>
            </div>
        )
    }
}

export default PageAbout
