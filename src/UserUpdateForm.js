import React, { Component } from "react"
import { Button, Form, Segment, Modal, Popup } from 'semantic-ui-react'

class UserUpdateForm extends Component {
    state = {
        username: "",
        name: "",
        age: "",
        location: ""
    }
    handleChange = (evt) => {
        let { value, name } = evt.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (

            <Modal
                closeIcon
                style={{ backgroundColor: 'AntiqueWhite' }}
                trigger={<Button color='yellow'>Update Info</Button>}
            >

                <Form onSubmit={() => this.props.updateUser(this.state)}>
                    <Segment style={{ padding: '30px', backgroundColor: 'AntiqueWhite' }}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Username' placeholder={this.props.user.username} name="username" onChange={this.handleChange} value={this.props.username} />
                            <Form.Input fluid label='Name' placeholder={this.props.user.name} name="name" onChange={this.handleChange} value={this.props.name} />
                            <Form.Input fluid label='Age' placeholder={this.props.user.age} name="age" onChange={this.handleChange} value={this.props.age} />
                            <Form.Input fluid label='Location' placeholder={this.props.user.location} name="location" onChange={this.handleChange} value={this.props.location} />
                        </Form.Group>
                        <Button type='submit' color="black">Submit Update</Button>

                        {this.handleUpdateSubmit ? null : <Popup content="Click X to close" trigger={<Form.Button style={{ backgroundColor: 'GreenYellow', align: 'center' }}>Form Complete!</Form.Button>} />}
                    </Segment>
                </Form>


            </Modal>

        )
    }
}
export default UserUpdateForm