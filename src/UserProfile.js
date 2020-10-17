import React, {Component} from "react"
import Userpage from "./Userpage"
import { withRouter } from 'react-router-dom'
import {Route, Link, Redirect} from 'react-router-dom'
import {Form, Modal, Popup} from "semantic-ui-react" 

class UserProfile extends Component {
    state = {
        username: "",
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
    // console.log(evt);
} 


handleSubmit = (evt) => {
    // console.log(evt);
    evt.preventDefault()

    const userObj = {
        username: this.state.username,
        name: this.state.name,
        age: this.state.age,
        location: this.state.location
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
    // create new user function from NavBar. Then from NavBar root is App.js
    this.props.newUser(newUserObj)
          this.props.history.push("/userpage")
      } )
      this.setState({
          name: "",
          username: "",
          age: "",
          location: "",
          handleSubmit: true
      })
}

// updatedUser = (updatedUserObj) => {

//     const updatedUserArr = this.state.user.map(user => {
//         if (user.id === updatedUserObj.id){
//             return updatedUserObj
//         } else {
//             return user
//         }
//     })
//     this.setState({
//         user: updatedUserArr
//     })
//     console.log(updatedUserArr)
//     console.log(updatedUserObj)
// }
// deleteUser = (userId) => {
//     console.log(this.state.user, "hi");
//     let copyOfUserArr = this.state.user.filter((user) => {
//         return user.id !== userId
//     })
//     this.setState({
//         user: copyOfUserArr
//     })
// }


    render() {
        // debugger
        console.log(this.props.history);
        // let newUserMapped = this.state.user.map(user => <Userpage user={user} key={user.id} updatedUser={this.updatedUser} deleteUser={this.deleteUser} /> )
        return(
            
            
            <div>
            <h1 className="watch">New User</h1>

            <Form onSubmit={this.handleSubmit} >
            <Form.Group widths="equal">

            <Form.Input type="text" fluid label=" Username" placeholder="Username" name="username" onChange={this.handleChange} value={this.state.username}/><br></br>

            <Form.Input type="text" fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />

            <Form.Input type="text" fluid label="Age" placeholder="Age" name="age" onChange={this.handleChange} value={this.state.age}/> 

            <Form.Input type="text" fluid label="Location" placeholder="Location" name="location" onChange={this.handleChange} value={this.state.location}/> 
            
          </Form.Group>
          <Form.Button color="black">Enter Info</Form.Button>

        {this.state.handleSubmit ?  <Popup content="Click X to close" trigger={<Form.Button style={{backgroundColor:'GreenYellow', align:'center'}}>Form Complete!</Form.Button>}/> : null}
         
        </Form>
         {/* <div> 
             {newUserMapped}
          </div> */}
             </div>
    
        )
    }
}
export default withRouter(UserProfile) 