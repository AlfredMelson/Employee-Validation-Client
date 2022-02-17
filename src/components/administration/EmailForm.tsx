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
import { z } from 'zod'
import useUpdateEmployee from '../../hooks/useUpdateEmployee'

interface IUpdateModal {
  emplId: string
  emplName: string
  emplRole: string
}

export default function EmailForm({ emplId, emplName, emplRole }: IUpdateModal) {
  const [emailFormInput, setEmailFormInput] = useState('')
  const [validatedEmail, setValidatedEmail] = useState('')

  const callUpdate = useUpdateEmployee({ emplId, emplName, emplRole, emplEmail: validatedEmail })

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

  //   const emplEmail = z.object({
  //   email: z.string()
  // })

  const EmployeeEmail = z.string().email({ message: 'Invalid email address' })

  const handleEmplEmailUpdate = async event => {
    event.preventDefault()

    try {
      const validEmailAddress = await EmployeeEmail.parse(emailFormInput)

      setValidatedEmail(validEmailAddress)

      callUpdate()

      window.location.reload()

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)

      // handle no response from the server
      // if (!error?.response) {
      //   setErrorMessage('No Server Response')

      // handle invalid syntax
      // } else if (error.response?.status === 400) {
      //   setErrorMessage('Missing Username or Password')

      // handle invalid syntax
      // } else if (error.response?.status === 401) {
      //   setErrorMessage('Unauthorized Creditentials')

      // catch-all-other-errors
      // } else {
      setErrorMessage('Invalid email address')

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
        <DialogTitle>{emplName} email address</DialogTitle>
        <DialogContent sx={{ minWidth: '480px' }}>
          <DialogContentText>
            <Collapse in={errorAlert}>
              <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
                {errorMessage}
              </Alert>
            </Collapse>
            {/* The email format provided is not valid. Please enter a valid email address. */}
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='standard'
            onChange={event => setEmailFormInput(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEmplEmailUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
