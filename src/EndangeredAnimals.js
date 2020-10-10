import React, {Component} from "react"
import AnimalCard from "./AnimalCard"
import AnimalCardFalse from "./AnimalCardFalse"
import {Grid, Card, Button, Icon, Label, Divider} from "semantic-ui-react" 
import SearchAnimal from "./SearchAnimal"
import { render } from "@testing-library/react"
import {Link} from 'react-router-dom'

class EndangeredAnimals extends Component {
    state = {
        seeAllAnimals: false
    }

    handleSeeMoreClick = (evt) => {
    console.log(evt);
    this.setState({
        seeAllAnimals: true
    })
    }

    handleSeeLessClick = (evt) => {
        console.log(evt);
        this.setState({
            seeAllAnimals: false
        })
        }

    render() {
        console.log(this.props.itemsPerRow);
    
        //5. Add addAnimalToWatchList as props to AnimalCard (Child)
        let endangeredAnimalCard = this.props.animals.map(animal => <AnimalCard key={animal.id} addAnimalToWatchList={this.props.addAnimalToWatchList} animal={animal} login={this.props.login}/>)

        // let endangeredAnimalCardFalse = this.props.animals.map(animal => <AnimalCardFalse key={animal.id} addAnimalToWatchList={this.props.addAnimalToWatchList} animal={animal} login={this.props.login}/>)

        let renderFirstThree = this.state.seeAllAnimals ? endangeredAnimalCard : endangeredAnimalCard.slice(0, 8)
   
        return(

        <div className="animalmain">
            <br></br> <br></br>
           
            <Card.Group centered itemsPerRow={this.props.itemsPerRow} padded>
            {/* {endangeredAnimalCard} */}
            
            {renderFirstThree}
            </Card.Group>

            <br></br>

            {/* the following ternary allows for a button to render all animals when clicked */}

            { this.state.seeAllAnimals ? "" : 
            <Button animated secondary floated="right" onClick={this.handleSeeMoreClick}>
            {/* <Link to="/endanimals"> */}
            <Button.Content visible>See More</Button.Content>
            
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
            {/* </Link> */}
            </Button>       
    }
            {this.state.seeAllAnimals ? 
            <Button animated secondary floated="right" onClick={this.handleSeeLessClick}>
            <Button.Content visible>See Less</Button.Content>
            
            <Button.Content hidden>
            <Icon name='arrow left' />
            </Button.Content>
            </Button> : "" }  
            <br></br> 

        </div>  
   
        )
    }
}
export default EndangeredAnimals
