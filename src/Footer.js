import React from "react"
import {Link} from 'react-router-dom'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


const Footer = () => {

    // return <footer>Footer</footer>
   return <Segment color="black" inverted vertical style={{ padding: '5em 0em' }}>
    <Container >
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a'><Link to="/about">About The Wildlife Keep</Link></List.Item>
              <List.Item as='a'><Link to="/contact">Contact Us</Link></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              {/* <List.Item as='a'>Banana Pre-Order</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item> */}
              <List.Item as='a'>How To Access</List.Item>
              {/* <List.Item as='a'>Favorite X-Men</List.Item> */}
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              Connect With The Wildlife Keep
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
}
export default Footer
