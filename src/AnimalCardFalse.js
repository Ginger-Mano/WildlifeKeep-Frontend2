import React, { Component } from "react"
import EndangeredInfoModal from "./EndangeredInfoModal"
import { Image, Card } from "semantic-ui-react"

class AnimalCardFalse extends Component {

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
    // console.log(this.props.animal);
    return (
      <div className="animalmain">
        <Card className="animalcard">
          <h2 className="animalname" onClick={this.handleInfoModalClick}>{this.props.animal.name}</h2>
          <Image className="animalImage" alt="image not available" src={this.props.animal.url} padded></Image>

          <EndangeredInfoModal animal={this.props.animal} />

        </Card>
      </div>
    )
  }
}
export default AnimalCardFalse
