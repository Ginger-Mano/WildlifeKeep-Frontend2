import React, { Component } from "react"
import AnimalCard from "./AnimalCard"
import {
    Card,
    Button,
    Icon
} from "semantic-ui-react"


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
        // console.log(this.props.itemsPerRow);

        let endangeredAnimalCard = this.props.animals.map(animal => <AnimalCard key={animal.id} addAnimalToWatchList={this.props.addAnimalToWatchList} animal={animal} login={this.props.login} />)

        let renderFirstThree = this.state.seeAllAnimals ? endangeredAnimalCard : endangeredAnimalCard.slice(0, 8)

        return (

            <div className="animalmain">
                <br></br> <br></br>

                <Card.Group centered itemsPerRow={this.props.itemsPerRow} padded>
                    {renderFirstThree}
                </Card.Group>

                <br></br>

                { this.state.seeAllAnimals ? "" :
                    <Button animated secondary floated="right" onClick={this.handleSeeMoreClick}>
                        <Button.Content visible>See More</Button.Content>

                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>

                    </Button>
                }
                {this.state.seeAllAnimals ?
                    <Button animated secondary floated="right" onClick={this.handleSeeLessClick}>
                        <Button.Content visible>See Less</Button.Content>

                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button> : ""}
                <br></br>

            </div>

        )
    }
}
export default EndangeredAnimals
