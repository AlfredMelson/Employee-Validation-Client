import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useRef, useState } from 'react'
import useUpdateEmployee from '../../hooks/useUpdateEmployee'

interface IUpdateModal {
  emplId: string
  emplName: string
  emplRole: string
}

export default function EmailForm({ emplId, emplName, emplRole }: IUpdateModal) {
  const [newEmail, setNewEmail] = useState('')
  const callUpdate = useUpdateEmployee({ emplId, emplName, emplRole, emplEmail: newEmail })

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleEmplUpdate = async event => {
    event.preventDefault()

    try {
      callUpdate()

      window.location.reload()

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)

      // handle no response from the server
      if (!error?.response) {
        setErrorMessage('No Server Response')

        // handle invalid syntax
      } else if (error.response?.status === 400) {
        setErrorMessage('Missing Username or Password')

        // handle invalid syntax
      } else if (error.response?.status === 401) {
        setErrorMessage('Unauthorized Creditentials')

        // catch-all-other-errors
      } else {
        setErrorMessage('Login Failed')
      }
      errorReference.current.focus()
    }
  }

  return (
    <>
      <Button
        size='small'
        variant='outlined'
        onClick={handleClickOpen}
        sx={{ textTransform: 'none' }}>
        Update Email
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Collapse in={errorAlert}>
          <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
            {errorMessage}
          </Alert>
        </Collapse>
        <DialogTitle>Updaet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='standard'
            onChange={event => setNewEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEmplUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
