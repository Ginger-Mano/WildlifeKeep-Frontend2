import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function UserDeleteModal1(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button color='black'>Delete Profile</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Confirm Delete
      </Header>
      <Modal.Content>
        <p>
          Are you sure you would like to delete your profile?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)} onClick={props.handleDelete}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UserDeleteModal1