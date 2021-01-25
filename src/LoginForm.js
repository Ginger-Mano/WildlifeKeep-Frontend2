import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import { Form } from "semantic-ui-react"

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.login(this.state)
    }

    render() {
        // debugger
        const { username, password } = this.state
        // console.log(this.props.history);
        return (
            <div>
                <h1 className="watch">Existing User</h1>

                <Form onSubmit={this.handleSubmit} >
                    <Form.Group widths="equal">

                        <Form.Input type="text" fluid label=" Username" placeholder="Username" name="username" onChange={this.handleChange} value={username} /><br></br>

                        <Form.Input type="text" fluid label="Password" placeholder="Password" name="password" onChange={this.handleChange} value={password} />

                    </Form.Group>
                    <Form.Button color="black">Enter Info</Form.Button>

                    {/* {this.state.handleSubmit ?  <Popup content="Click X to close" trigger={<Form.Button style={{backgroundColor:'GreenYellow', align:'center'}}>Form Complete!</Form.Button>}/> : null} */}

                </Form>
            </div>

        )
    }
}
export default withRouter(LoginForm) 