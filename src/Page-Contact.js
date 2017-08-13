import React from 'react'
import Page from './Page'
import Title from './Title'

class PageContact extends Page {
    render() {
        return(
            <div className="page" id="page_contact">
                <Title level={1} value="Contact Me" />
            </div>
        )
    }
}

export default PageContact
