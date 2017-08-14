import React from 'react'
import Page from './Page'
import Title from './Title'
import _ from 'underscore'

class PageHome extends Page {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
        this.getdata()
    }
    getdata() {
        let that = this
        fetch('https://swapi.co/api/')
            .then((response) => response.json())
            .then(function(data) {
                that.getdatasuccess(data)
            }).catch(function(error) {
                console.log('Error: ', error)
            })
    }
    getdatasuccess(data) {
        this.state.data = data

        this.render()
    }
    render() {
        let sections = []
        let that = this

        if (this.state.data) {
            _.each(_.keys(this.state.data), function (item) {
                console.log(item)
                sections.push(that.returnnavitem(item))
            });
        }

        console.log('Sections: ', sections)

        return(
            <div className="page" id="page_home">
                <Title level={1} value="React Playground" />

                <nav>
                    <ul>
                        {sections}
                    </ul>
                </nav>
            </div>
        )
    }
    returnnavitem(name) {
        return(<li key={name}><a>{name}</a></li>)
    }
}

export default PageHome
