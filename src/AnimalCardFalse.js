import React, {Component} from "react"
import EndangeredInfoModal from "./EndangeredInfoModal"
import {Image, Card} from "semantic-ui-react" 

class AnimalCardFalse extends Component {

handleAddToWatch = (evt) => {
    //1. Console log the evt    
    // console.log(evt);

    // 7. Add prop function that adds Animal to WatchL
    this.props.addAnimalToWatchList(this.props.animal)

}
removeWatchAnimal = (evt) => {
    this.props.removeAnimal(this.props.animal)
  }

  handleInfoModalClick = (evt) => {
    console.log(evt);
    
  }

    render() {
        console.log(this.props.animal);
    return(
      <div className="animalmain">
      <Card>
        
        {/* 8. Add in the ternary statement for the conditional rendering */}
        <h2 onClick={this.handleInfoModalClick}>{this.props.animal.name}</h2>
        <Image size='large' src={this.props.animal.url} padded></Image>

        <EndangeredInfoModal animal={this.props.animal} />
        
    </Card>
    </div>
    )
    }
}
export default AnimalCardFalse
