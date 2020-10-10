import React, {Component} from "react"
import UserProfile from "./UserProfile"
import {Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { NavLink , Link} from 'react-router-dom'
import {Form, Modal} from "semantic-ui-react" 
 import {
     Button,
     Container,
     Menu,
     Visibility,
     Icon
   } from 'semantic-ui-react'


class NavigationBar extends Component {
     state = {}

     hideFixedMenu = () => this.setState({ fixed: false })
     showFixedMenu = () => this.setState({ fixed: true })
  
    render() {  
    console.log(this.props.user.username);

    const { children } = this.props
    const { fixed } = this.state
    return    <div className="nav">

    <Visibility
     once={false}
     onBottomPassed={this.showFixedMenu}
     onBottomPassedReverse={this.hideFixedMenu}>

    <Menu color="black"
     fixed={fixed ? 'top' : null}
     inverted={!fixed}
     pointing={!fixed}
     secondary={!fixed}
     size='large'
    >
      <Container>
     
     <Menu.Item  as='a' active>
       <NavLink to='/'>Home</NavLink>
     </Menu.Item>
   
    {/* <Link to="/endanimals"> */}
    <Menu.Item as='a'> <Link to="/endanimals">Animals </Link></Menu.Item>
    {/* </Link> */}

     <Menu.Item as='a'>Organizations</Menu.Item>
     <Menu.Item as='a'>Tribe</Menu.Item>
     <Menu.Item position='right'>

       <Button as='a' color="black" inverted={!fixed}>
         
         {this.props.login !== false ? this.props.user.username : "Log In"}
       </Button>
        {this.props.login !== false ? "" :
        <Modal closeIcon style={{padding: '30px', backgroundColor: 'AntiqueWhite'}} trigger= {<Button icon color="black" inverted={!fixed} style={{ marginLeft: '0.5em'}}>
          
         Sign Up 
          </Button>}>
          <UserProfile setCurrentUser={this.props.setCurrentUser} deleteUser={this.props.deleteUser}/>
        </Modal>}
      

     </Menu.Item>
    </Container>
   </Menu>
  </Visibility>
  </div>
  }
}



export default NavigationBar