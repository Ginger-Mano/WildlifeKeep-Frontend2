import React, {Component} from 'react';
import NavigationBar from "./NavigationBar"
import MainComponent from "./MainComponent"
import Footer from "./Footer"
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Userpage from "./Userpage"
import { withRouter } from 'react-router-dom'
import useSound from 'use-sound'
import AnimalCardFalse from './AnimalCardFalse';
import AboutPage from './AboutPage';
import Contact from "./Contact"

class App extends Component {
    state = {
      login: false,
      user: {},
      watchAnimals: [],
      animals: []
    }

    componentDidMount() {
          //9. Set up to have the backend persist on frontend 
          fetch(`http://localhost:3000/watchAnimals`)
          .then(res => res.json())
          .then(watchAnimalArray => 
              this.setState({
              watchAnimals: watchAnimalArray})
              // console.log(watchAnimalArray)
          )
          fetch(`http://localhost:3000/allSpecies`)
          .then(res => res.json())
          .then(animalArray => 
            this.setState({
            animals: animalArray})
            )
  }

  addAnimalToWatchList = (animal) => {
    //3. Grab AnimalCard Obj from AnimalCard.js
    // this.setState({
    //   watchAnimals: [...this.state.watchAnimals, animal]
    // })
    //10. Fetch to update the backend with newAnimalCopy
    fetch("http://localhost:3000/watchAnimals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(animal)
  })
    .then(r => r.json())
    .then(newWatchAnimalObj => {
        // console.log(newWatchAnimalObj);
        this.setState({
              watchAnimals: [...this.state.watchAnimals, newWatchAnimalObj]
            })
    })
}

removeAnimal = (animal) => {
  //11. Set up the removal of a WatchAnimal by filter then setting state
//   12. Add fetch for delete from backend and put filter section in the second .then
  fetch(`http://localhost:3000/watchAnimals/${animal.id}`, {
    method: "DELETE"
})
.then(res => res.json())
.then((deletedAnimal) => {
    let filteredArr = this.state.watchAnimals.filter(watchAnimal => watchAnimal !== animal)
    this.setState({
      watchAnimals: filteredArr
    })
    // console.log(animal)
})
}





    //setCurrentUser func is being sent to the UserProfile as props
    //UserObj is coming when a user is being created
    setCurrentUser = (userObj) => {
      this.setState({
        user: userObj,
        login: true
      })
      // this.props.history.push("/userpage")
    }
   
    //sending updateUser to userUpdateForm
    updatedUser = (updatedUserObj) => {

      this.setState({
          user: updatedUserObj
      })
      // console.log(updatedUserArr)
      // console.log(updatedUserObj)
    }

    deleteUser = () => {
      console.log(this.state.user, "hi");
      // let copyOfUserArr = this.state.user.filter((user) => {
      //     return user.id !== userId
      // })
      this.setState({
          user: {}
      })
      this.props.history.push("/")
  } 

  render() {
    console.log(this.state.login);
    let endangeredAnimalCardFalse = this.state.animals.map(animal => <AnimalCardFalse key={animal.id} addAnimalToWatchList={this.addAnimalToWatchList} animal={animal} login={this.state.login}/>)
  return (
   
    <div className="App">
      <NavigationBar login={this.state.login} user={this.state.user} setCurrentUser={this.setCurrentUser}  />

      <Switch>
      <Route exact path="/" render={ () => <MainComponent login={this.state.login} addAnimalToWatchList={this.addAnimalToWatchList}/>}/>
 
      <Route path="/userpage" render={ () => <Userpage user={this.state.user} updatedUser={this.updatedUser} deleteUser={this.deleteUser} addAnimalToWatchList={this.addAnimalToWatchList}  removeAnimal={this.removeAnimal} watchAnimals={this.state.watchAnimals} animals={this.state.animals} setCurrentUser={this.setCurrentUser}/>}/>

      <Route path="/endanimals" render={ () => endangeredAnimalCardFalse}/>

      <Route path="/about" render={ () => <AboutPage />}/>

      <Route path="/contact" render={ () => <Contact />}/>
      </Switch>
     
      <Footer />
    </div>
  
  );
}
}

export default withRouter(App);
