import React, {Component} from "react"
import EndangeredInfoModal from "./EndangeredInfoModal"
import {Grid, Divider, Icon, Image, Input, Card} from "semantic-ui-react" 

class AnimalCard extends Component {

handleAddToWatch = (evt) => {
    //1. Console log the evt    
    // console.log(evt);

    // 7. Add prop function that adds Animal to WatchL
    this.props.addAnimalToWatchList(this.props.animal)

}
removeWatchAnimal = (evt) => {
    this.props.removeAnimal(this.props.animal)
    // console.log(this.props.animal);
  }

  handleInfoModalClick = (evt) => {
    console.log(evt);
    
  }

    render() {
        console.log(this.props.login);
        // let renderFirstThree = this.props.login ? eachAnimal : eachAnimal.slice(0, 3)
    return(  
     
    this.props.login !== false ?
    <Card className="animalcard">
        
        {/* 8. Add in the ternary statement for the conditional rendering */}
        <h2 className="animalname" onClick={this.handleInfoModalClick}>{this.props.animal.name}</h2>
        <Image className="animalImage" src={this.props.animal.image.url} padded></Image>

        <EndangeredInfoModal animal={this.props.animal} />
        <br></br>
        <Icon color="red" size="large" onClick={this.props.addAnimalToWatchList ? this.handleAddToWatch : this.removeWatchAnimal} link name={this.props.addAnimalToWatchList ? 'heart' : 'trash' }/>
        
    </Card> : <Card className="animalcard">
        
    {/* 8. Add in the ternary statement for the conditional rendering */}
    <h2 className="animalname" onClick={this.handleInfoModalClick}>{this.props.animal.name}</h2>
    <Image className="animalImage" src={this.props.animal.image.url} padded></Image>

    <EndangeredInfoModal animal={this.props.animal} />
    <br></br>
    <Icon color="red" size="large" onClick={this.props.addAnimalToWatchList ? this.handleAddToWatch : this.removeWatchAnimal} link name={this.props.addAnimalToWatchList ? "" : "" }/>
    
</Card>  


    )
    }
}
export default AnimalCard
