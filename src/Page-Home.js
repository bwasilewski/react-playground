import React from 'react'
import Page from './Page'
import Title from './Title'

class PageHome extends Page {
    render() {
        return(
            <div className="page" id="page_home">
                <Title level={1} value="React Playground" />
            </div>
        )
    }
}

export default PageHome
