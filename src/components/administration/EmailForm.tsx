import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { AxiosResponse } from 'axios'
import { useRef, useState } from 'react'
import axios from '../../api/axiosCustom'
import { API, AxiosEmplUpdateConfig, REGEX_Password } from '../../utils'
import { UpdateEmailButtonSx } from '../mui/Button.style'

interface IUpdateModal {
  emplId: string
  emplName: string
  emplRole: string
}

export default function EmailForm({ emplId, emplName, emplRole }: IUpdateModal) {
  const [emailFormInput, setEmailFormInput] = useState('')

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

  const handleEmplEmailUpdate = async event => {
    event.preventDefault()

    try {
      // FIX: validate email input with regex
      const validEmailAddress = REGEX_Password.test(emailFormInput)

      // if valid, setValidatedEmail to emailFormInput
      // setValidatedEmail(validEmailAddress && emailFormInput)
      const emplEmail = !validEmailAddress && emailFormInput

      const response: AxiosResponse = await axios.post(
        // pull in the update endpoint
        API.UpdateEmployee,

        // pull in the employee data
        JSON.stringify({ emplId, emplName, emplRole, emplEmail }),

        // pull in axios update config; sending back the secure cookie with the request
        AxiosEmplUpdateConfig
      )

      // Return JSON
      console.log(response.data)

      // close dialog if positive response frm server
      // update email address in employee list & ensure recalculation of errors
      // window.location.reload()

      setOpen(false)

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)
      setErrorMessage('Invalid email address')

      errorReference.current.focus()
    }
  }

  return (
    <>
      <UpdateEmailButtonSx
        size='small'
        variant='outlined'
        onClick={handleClickOpen}
        sx={{ textTransform: 'none' }}>
        Update Email
      </UpdateEmailButtonSx>
      <Dialog open={open} onClose={handleClose}>
        <Collapse in={errorAlert} sx={{ m: '10px 30px' }}>
          <Alert variant='filled' severity='error' ref={errorReference}>
            {errorMessage}
          </Alert>
          {/* The email format provided is not valid. Please enter a valid email address. */}
        </Collapse>
        <DialogTitle sx={{ minWidth: '480px' }}>{emplName} </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Updated Email Address'
            type='email'
            fullWidth
            variant='standard'
            onChange={event => {
              setEmailFormInput(event.target.value), setErrorAlert(false)
            }}
          />
        </DialogContent>
        <DialogActions sx={{ m: '0 10px 10px 0' }}>
          <Button onClick={handleClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button onClick={handleEmplEmailUpdate} sx={{ textTransform: 'none' }}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
