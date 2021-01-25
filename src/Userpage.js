import React, { Component } from "react"
import UserUpdateForm from "./UserUpdateForm"
import EndangeredAnimals from "./EndangeredAnimals"
import WatchList from "./WatchList"
import UserDeleteModal1 from "./UserDeleteModal1"
import { Grid } from "semantic-ui-react"
import { withRouter } from 'react-router-dom'


class Userpage extends Component {
    state = {
        login: true
    }

    handleDelete = (event) => {
        console.log(this.props.user.id);
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedUser) => {
                console.log(this.props)
                localStorage.removeItem('token')
                this.props.history.push("/")
            })
    }

    updateUser = (updateUserObj) => {
        console.log(updateUserObj);
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateUserObj)
        })
            .then(res => res.json())
            .then(updatedUser => {
                // this.props.history.push("/userpage")
                this.setState({
                    name: updatedUser.name,
                    username: updatedUser.username,
                    password: updatedUser.password,
                    age: updatedUser.age,
                    location: updatedUser.location,

                })
                console.log(updatedUser)
                this.props.history.push("/userpage")
            })

    }

    render() {
        // console.log(this.props.history)
        return (

            <div className="userpage">
                <div className="userinfo">
                    <br></br><br></br>
                    <h2>Welcome, {this.props.user.username}!</h2>
                    <br></br>
                    <h3>
                        Here is your profile info: <br></br>
                        <br></br>
                Name: {this.props.user.name} <br></br><br></br>
                Age: {this.props.user.age} <br></br><br></br>
                Location: {this.props.user.location}
                    </h3>

                    <UserDeleteModal1 handleDelete={this.handleDelete} />

                    <UserUpdateForm user={this.props.user} updateUser={this.updateUser} />
                </div>
                <br></br><br></br>

                <Grid columns={2} divided>
                    <Grid.Column>
                        {this.state.login ?
                            <div>
                                <EndangeredAnimals animals={this.props.animals} itemsPerRow={2} addAnimalToWatchList={this.props.addAnimalToWatchList} />
                            </div>
                            : null}
                    </Grid.Column>
                    <Grid.Column>
                        <div>


                            <div className="watchdiv">
                                <WatchList watchAnimals={this.props.watchAnimals} addAnimalToWatchList={this.props.addAnimalToWatchList} itemsPerRow={1} removeAnimal={this.props.removeAnimal} />
                            </div>

                        </div>
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}
export default withRouter(Userpage)