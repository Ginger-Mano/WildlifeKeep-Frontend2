import React, { Component, useReducer } from "react"
import UserProfile from "./UserProfile"
import LoginForm from "./LoginForm"
import { NavLink, Link } from 'react-router-dom'
import {
  Button,
  Container,
  Menu,
  Modal,
  Visibility,
} from 'semantic-ui-react'

class NavigationBar extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  loggedOutUser = () => {
    localStorage.removeItem("token")
  }

  render() {

    const { fixed } = this.state
    return <div className="nav">

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

            <Menu.Item as='a' active>
              <NavLink to='/'>Home</NavLink>
            </Menu.Item>

            <Menu.Item as='a'> <Link to="/endanimals">Animals </Link></Menu.Item>
            <Menu.Item as='a'>Organizations</Menu.Item>
            <Menu.Item as='a'>Tribe</Menu.Item>
            {localStorage.token ?
              <>
                <Menu.Item as='a'> <Link to="/userpage">Welcome, {this.props.user.name}</Link></Menu.Item>
                <Menu.Item onClick={this.loggedOutUser} as='a' > <Link to='/'>Log Out</Link></Menu.Item>
              </> :
              <Menu.Item position='right'>

                <Modal closeIcon style={{ padding: '30px', backgroundColor: 'AntiqueWhite' }}
                  trigger={<Button as='a' color="black" inverted={!fixed}>

                    Log In
         </Button>}>
                  <LoginForm login={this.props.login} deleteUser={this.props.deleteUser} />
                </Modal>

                <Modal closeIcon style={{ padding: '30px', backgroundColor: 'AntiqueWhite' }} trigger={
                  <Button icon color="black" inverted={!fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                </Button>}
                >
                  <UserProfile user={this.props.user} newUser={this.props.newUser} deleteUser={this.props.deleteUser} />
                </Modal>


              </Menu.Item>}
          </Container>
        </Menu>
      </Visibility>
    </div>
  }
}



export default NavigationBar