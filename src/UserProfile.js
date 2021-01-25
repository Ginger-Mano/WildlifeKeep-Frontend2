import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import { Form, Popup } from "semantic-ui-react"

class UserProfile extends Component {
    state = {
        username: "",
        password: "",
        name: "",
        age: "",
        location: "",
        avatar: "",
        handleSubmit: false
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }

    handleSubmit = (evt) => {
        // console.log(evt);
        evt.preventDefault()

        const userObj = {
            user: {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                age: this.state.age,
                location: this.state.location
            }
        }
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
            .then(res => res.json())
            .then(newUserObj => {
                localStorage.setItem("token", newUserObj.token)
                this.props.newUser(newUserObj)
                this.props.history.push("/userpage")
            })
        this.setState({
            name: "",
            username: "",
            password: "",
            age: "",
            location: "",
            handleSubmit: true
        })
    }

    render() {
        // debugger
        console.log(this.props.history);
        const { name, username, age, location, password, avatar, handleSubmit } = this.state
        return (
            <div>
                <h1 className="watch">New User</h1>

                <Form onSubmit={this.handleSubmit} >
                    <Form.Group widths="equal">

                        <Form.Input type="text" fluid label=" Username" placeholder="Username" name="username" onChange={this.handleChange} value={username} /><br></br>

                        <Form.Input type="password" fluid label="Password" placeholder="Password" name="password" onChange={this.handleChange} value={password} /><br></br>

                        <Form.Input type="text" fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={name} />

                        <Form.Input type="text" fluid label="Age" placeholder="Age" name="age" onChange={this.handleChange} value={age} />

                        <Form.Input type="text" fluid label="Location" placeholder="Location" name="location" onChange={this.handleChange} value={location} />

                    </Form.Group>
                    <Form.Button color="black">Enter Info</Form.Button>

                    {handleSubmit ? <Popup content="Click X to close" trigger={<Form.Button style={{ backgroundColor: 'GreenYellow', align: 'center' }}>Form Complete!</Form.Button>} /> : null}

                </Form>
            </div>

        )
    }
}
export default withRouter(UserProfile) 