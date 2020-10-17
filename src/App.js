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
          fetch(`http://localhost:3000/endangered_animals`)
          .then(res => res.json())
          .then(animalArray => 
            this.setState({
            animals: animalArray})
            )
            if (this.state.token) {
              fetch(`http://localhost:3000/persist`, {
                headers: {
                  "Authorization": `bearer ${this.state.token}`
                }
              })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.token) {
                  this.setState({
                    user: data.user
                  })
                }
              })
            }
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

newUser = (newUserObj) => {
  this.setState({
    user: newUserObj.user, 
    token: newUserObj.token
  })
}



  render() {
    console.log(this.state.user);
    // debugger
    let endangeredAnimalCardFalse = this.state.animals.map(animal => <AnimalCardFalse key={animal.id} addAnimalToWatchList={this.addAnimalToWatchList} animal={animal} login={this.state.login}/>)
  return (
   
    <div className="App">
      <NavigationBar user={this.state.user} newUser={this.newUser}  />

      <Switch>
      <Route exact path="/" render={ () => <MainComponent addAnimalToWatchList={this.addAnimalToWatchList}/>}/>
 
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
