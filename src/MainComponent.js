import React, {Component} from "react"
import StaticEndAnimTitle from "./StaticEndAnimTitle"
import EndangeredAnimals from "./EndangeredAnimals"
import Static1 from "./Static1"
import Static111 from "./Static111"
import Static2vid from './Static2vid';
// import Static11 from "./Static11"
import {Route} from 'react-router-dom'
import {Grid, Card} from "semantic-ui-react" 

class MainComponent extends Component {
    state = {
        animals: []
        // watchAnimals: []
        //Adding Animal Card to WatchL 2. Add state
    }

    componentDidMount() {
        fetch(`http://localhost:3000/allSpecies`)
        .then(res => res.json())
        .then(animalArray => 
            this.setState({
            animals: animalArray})
            )
            //9. Set up to have the backend persist on frontend 
            // fetch(`http://localhost:3000/watchAnimals`)
            // .then(res => res.json())
            // .then(watchAnimalArray => 
            //     this.setState({
            //     watchAnimals: watchAnimalArray})
            //     // console.log(watchAnimalArray)
            //  )
    }

    // addAnimalToWatchList = (animal) => {
    //     //3. Grab AnimalCard Obj from AnimalCard.js
    //     // this.setState({
    //     //   watchAnimals: [...this.state.watchAnimals, animal]
    //     // })
    //     //10. Fetch to update the backend with newAnimalCopy
    //     fetch("http://localhost:3000/watchAnimals", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(animal)
    //   })
    //     .then(r => r.json())
    //     .then(newWatchAnimalObj => {
    //         // console.log(newWatchAnimalObj);
    //         this.setState({
    //               watchAnimals: [...this.state.watchAnimals, newWatchAnimalObj]
    //             })
    //     })
    // }

      // removeAnimal = (animal) => {
      //     //11. Set up the removal of a WatchAnimal by filter then setting state
      //   //   12. Add fetch for delete from backend and put filter section in the second .then
      //     fetch(`http://localhost:3000/watchAnimals/${animal.id}`, {
      //       method: "DELETE"
      //   })
      //   .then(res => res.json())
      //   .then((deletedAnimal) => {
      //       let filteredArr = this.state.watchAnimals.filter(watchAnimal => watchAnimal !== animal)
      //       this.setState({
      //         watchAnimals: filteredArr
      //       })
      //       // console.log(animal)
      //   })
      // }

      

    render() {
        // console.log(this.state.watchAnimals)
        return(
          <div>
          <Static1 /> 
           <Static111 />
           <StaticEndAnimTitle />
          {/* <Static11 /> */}
      
            <div className="mainback">
            
                {/* 4. Pass props (addAnimalToWatchList) to EndangeredAnimals (Child1) */}
            <EndangeredAnimals  animals={this.state.animals}addAnimalToWatchList={this.props.addAnimalToWatchList} login={this.props.login} /> 
            


            {/* <Grid.Column width={5}> */}
                     {/* 12. Pass the removeWatchAnimal function as Prop to WatchL */}
                     {/* <WatchList watchAnimals={this.state.watchAnimals} removeAnimal={this.removeAnimal}/>    */}
            {/* </Grid.Column>  */}

            <Static2vid />

            </div>


            </div>  
        
        )
    }
}
export default MainComponent