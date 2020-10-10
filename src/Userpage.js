import React, {Component} from "react"
import UserUpdateForm from "./UserUpdateForm"
import EndangeredAnimals from "./EndangeredAnimals"
import WatchList from "./WatchList"
import UserDeleteModal1 from "./UserDeleteModal1"
import { Sidebar, Grid } from "semantic-ui-react"

class Userpage extends Component {

    handleDelete = (event) => {
        console.log(this.props.user.id);
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((deletedUser) => {
            console.log(deletedUser)
            // console.log(this.props)
            this.props.deleteUser(this.props.user.id)
        })
    } 

  
    render() {
        console.log(this.props);
        return(

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

            <UserUpdateForm user={this.props.user} updatedUser={this.props.updatedUser}/>
            </div>
            <br></br><br></br>

            <Grid columns={2} divided>
           <Grid.Column>
            {this.props.setCurrentUser ? 
            <div>
            <EndangeredAnimals  animals={this.props.animals} itemsPerRow={2} addAnimalToWatchList={this.props.addAnimalToWatchList} /> 
            </div>
             : null}
            </Grid.Column>
            <Grid.Column>
            <div>
             
            {/* <div>
                <br></br><br></br>
            <h2>Welcome, {this.props.user.username}!</h2>
            <br></br>
            <h3>
                Here is your profile info: <br></br>
                <br></br>
                Name: {this.props.user.name} <br></br>
                Age: {this.props.user.age} <br></br>
                Location: {this.props.user.age}
            </h3>
           
            <UserDeleteModal1 handleDelete={this.handleDelete} />

            <UserUpdateForm user={this.props.user} updatedUser={this.props.updatedUser}/>
            </div> */}
            
            <div className="watchdiv">
              <WatchList watchAnimals={this.props.watchAnimals} addAnimalToWatchList={this.props.addAnimalToWatchList} itemsPerRow={1} removeAnimal={this.props.removeAnimal}/>     
              </div>
             
              </div>
              </Grid.Column>
              </Grid>
</div>
    
        )
    }
}
export default Userpage