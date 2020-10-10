import React, {Component} from "react"
import AnimalCard from "./AnimalCard"
import {Route} from 'react-router-dom'
import { Card } from "semantic-ui-react"


class WatchList extends Component {

    render() {
        
        // console.log(this.props);
        // console.log(this.state.watchAnimals);

        // 6. Map over the watchAnimals array to render the AnimalCard
        let watchListArr = this.props.watchAnimals.map(animal => 
        <AnimalCard animal={animal} removeAnimal={this.props.removeAnimal}/>)
        
        return(    
        <div className="watchlistmain">
        <br></br>
       
        <h1 className="watch">Your WatchList</h1>    
        <h3>Here are your animals: </h3><br></br>

        <Card.Group centered itemsPerRow={1}>
        {watchListArr}
        </Card.Group>
        </div>

        )
    }
}
export default WatchList
