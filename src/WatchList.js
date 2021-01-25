import React, { Component } from "react"
import { Card } from "semantic-ui-react"
import AnimalCard from "./AnimalCard"


class WatchList extends Component {

    render() {

        // console.log(this.props);

        let watchListArr = this.props.watchAnimals.map(animal =>
            <AnimalCard animal={animal} key={animal.id} removeAnimal={this.props.removeAnimal} />)

        return (
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
