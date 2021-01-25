import React, { Component } from 'react';
import AnimalCardFalse from './AnimalCardFalse';
import AboutPage from './AboutPage';
import Contact from "./Contact"
import Footer from "./Footer"
import NavigationBar from "./NavigationBar"
import MainComponent from "./MainComponent"
import Userpage from "./Userpage"
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import EndangeredAnimals from './EndangeredAnimals';


class App extends Component {
  state = {
    login: false,
    user: {},
    watchAnimals: [],
    animals: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/watch_lists`)
      .then(res => res.json())
      .then(watchAnimalArray =>
        this.setState({
          watchAnimals: watchAnimalArray

        })

      )
    fetch(`http://localhost:3000/endangered_animals`)
      .then(res => res.json())
      .then(animalArray =>
        this.setState({
          animals: animalArray
        })
      )
    if (localStorage.token) {
      fetch(`http://localhost:3000/persist`, {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.token) {
            this.setState({
              login: true,
              user: data.user
            })
          }
        })
    }
  }

  addAnimalToWatchList = (animal) => {
    fetch(`http://localhost:3000/watch_lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(r => r.json())
      .then(newWatchAnimalObj => {
        this.setState({
          watchAnimals: [...this.state.watchAnimals, newWatchAnimalObj]
        })
      })
  }

  removeAnimal = (animal) => {
    fetch(`http://localhost:3000/watch_lists/${animal.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then((deletedAnimal) => {
        let filteredArr = this.state.watchAnimals.filter(watchAnimal => watchAnimal !== animal)
        this.setState({
          watchAnimals: filteredArr
        })
      })
  }

  newUser = (newUserObj) => {
    this.setState({
      user: newUserObj.user,
      token: newUserObj.token
    })
  }

  login = (existingUser) => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingUser)
    })
      .then(r => r.json())
      .then(data => {
        console.log(data);
        if (data.token) {
          this.setState({
            user: data.user
          })
          localStorage.setItem("token", data.token)
          this.props.history.push("/userpage")

        } else {

          alert("Please sign up!")
        }
      })

  }

  render() {
    console.log(this.state.user)
    const { user, watchAnimals, animals } = this.state
    // debugger
    let endangeredAnimalCardFalse = animals.map(animal => <AnimalCardFalse key={animal.id} addAnimalToWatchList={this.addAnimalToWatchList} animal={animal} />)
    return (

      <div className="App">
        <NavigationBar user={user} login={this.login} newUser={this.newUser} />

        <Switch>
          <Route exact path="/" render={() => <MainComponent addAnimalToWatchList={this.addAnimalToWatchList} />} />

          <Route path="/userpage" render={() => <Userpage user={user} updatedUser={this.updatedUser} deleteUser={this.deleteUser} addAnimalToWatchList={this.addAnimalToWatchList} removeAnimal={this.removeAnimal} watchAnimals={watchAnimals} animals={animals} />} />

          <Route path="/endanimals" render={() => <EndangeredAnimals endangeredAnimalCardFalse={endangeredAnimalCardFalse} />} />

          <Route path="/about" render={() => <AboutPage />} />

          <Route path="/contact" render={() => <Contact />} />
        </Switch>

        <Footer />
      </div>

    );
  }
}

export default withRouter(App);
