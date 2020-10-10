import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const EndangeredInfoModal = (props) => {
  // console.log(props);
   const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button color="black">{props.animal.name} Info</Button>}
    >
      <Modal.Header >The {props.animal.name}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="large" src={props.animal.image.url} wrapped />

        <Modal.Description>
        <Image className="animalModalImg"
            src={props.animal.image.url}
            style={{ marginBottom: 10 }}
          />
          <br></br>
          <p className="animalmodaldes">
            {props.animal.description}
          </p>

          {/* <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          /> */}
        
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Close <Icon name='times' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EndangeredInfoModal