import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import ContactInfoModal from "./ContactInfoModal"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Contact extends Component {
  state = {
      handleSubmit: false
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (evt) => {
  console.log(evt);
  this.setState({
      handleSubmit: true
  })
  }

  render() {
    const { value } = this.state
    return (
      <Form onClick={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Input fluid label='Email' placeholder='Email' />
          
        </Form.Group>
       
        <Form.TextArea label='About' placeholder='Tell us more...' />
        <Form.Button>Submit</Form.Button>
      </Form>
 
    )
  }
}

export default Contact