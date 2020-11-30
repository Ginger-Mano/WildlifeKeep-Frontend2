import React, {Component} from "react"
import EndangeredAnimals from "./EndangeredAnimals"
import Static1 from "./Static1"
import Static111 from "./Static111"
import Static2vid from './Static2vid';


class MainComponent extends Component {
    state = {
        animals: []
        //Adding Animal Card to WatchL 2. Add state
    }

    componentDidMount() {
        fetch(`http://localhost:3000/endangered_animals`)
        .then(res => res.json())
        .then(animalArray => 
            this.setState({
            animals: animalArray})
            )
    }

    render() {
        // console.log(this.state.watchAnimals)
        return(
          <div>
          <Static1 /> 
           <Static111 />
      
            <div className="mainback">
            
                {/* 4. Pass props (addAnimalToWatchList) to EndangeredAnimals (Child1) */}
            <EndangeredAnimals  animals={this.state.animals}addAnimalToWatchList={this.props.addAnimalToWatchList} login={this.props.login} /> 
            <Static2vid />

            </div>
            </div>  
        
        )
    }
}
export default MainComponent