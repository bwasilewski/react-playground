import React from 'react'
import Page from './Page'
import Title from './Title'
import Form from './Form'

class PageContact extends Page {
    render() {
        return(
            <div className="page" id="page_contact">
                <Title level={2} value="Contact" />
                <p>You can contact me by filling out the form below:</p>
                <Form id="form-contact">
                    <input type="text" id="field-name" placeholder="Your Name"></input>
                    <input type="email" id="field-name" placeholder="Your Email"></input>
                    <textarea placeholder="Your Thoughts"></textarea>
                </Form>
            </div>
        )
    }
}

export default PageContact
