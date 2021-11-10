import React, { Component } from "react"
import EndangeredInfoModal from "./EndangeredInfoModal"
import { Icon, Image, Card } from "semantic-ui-react"

class AnimalCard extends Component {

    handleAddToWatch = (evt) => {
        this.props.addAnimalToWatchList(this.props.animal)

    }
    removeWatchAnimal = (evt) => {
        this.props.removeAnimal(this.props.animal)
    }

    handleInfoModalClick = (evt) => {
        console.log(evt);

    }

    render() {
        return (

            this.props.login === false ?
                <Card className="animalcard">


                    <h2 className="animalname" onClick={this.handleInfoModalClick}>{this.props.animal.name}</h2>
                    <Image className="animalImage" alt="image not available" src={this.props.animal.url} padded></Image>

                    <EndangeredInfoModal animal={this.props.animal} />
                    <br></br>
                    <Icon color="red" size="large" onClick={this.props.addAnimalToWatchList ? this.handleAddToWatch : this.removeWatchAnimal} link name={this.props.addAnimalToWatchList ? 'heart' : 'trash'} />

                </Card> : <Card className="animalcard">


                    <h2 className="animalname" onClick={this.handleInfoModalClick}>{this.props.animal.name}</h2>
                    <Image className="animalImage" src={this.props.animal.url} padded></Image>

                    <EndangeredInfoModal animal={this.props.animal} />
                    <br></br>
                    <Icon color="red" size="large" onClick={this.props.addAnimalToWatchList ? this.handleAddToWatch : this.removeWatchAnimal} link name={this.props.addAnimalToWatchList ? "" : ""} />

                </Card>


        )
    }
}
export default AnimalCard
