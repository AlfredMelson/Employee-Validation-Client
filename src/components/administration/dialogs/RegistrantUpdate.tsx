import SettingsIcon from '@mui/icons-material/Settings'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AxiosResponse } from 'axios'
import { useEffect, useRef, useState } from 'react'
import axios from '../../../api/axiosCustom'
import { UMSwatch } from '../../../style'
import { API, AxiosEmplUpdateConfig, regexEmailValidation } from '../../../utils'
import { BadgeIcon, CloseIcon } from '../../icons'
import {
  CRUDHeaderGroupSx,
  DialogContentSx,
  DialogContentTextSx,
  DialogSx,
  ListItemIconButtonSx,
  SubmissionButtonSx,
  TextFieldSx,
  ToolTipSx
} from '../../mui'

interface IRegistrantUpdate {
  emplId: string
  emplName: string
  emplRole: string
  emplEmail: string
}

export default function RegistrantUpdate({
  emplId,
  emplName,
  emplRole,
  emplEmail
}: IRegistrantUpdate) {
  // update email dialog state
  const [open, setOpen] = useState(false)

  const theme = useTheme()

  // dialog width on tablet size and smaller
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // email address input state
  const [emailUpdate, setEmailUpdate] = useState('')
  const [emailHelperText, setEmailHelperText] = useState<string>('')

  // email address validation state
  const [emailValidation, setEmailValidation] = useState<boolean>(false)

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // reset alert when either the username or password state changes
      setEmailHelperText('')
    }
  }, [emailUpdate])

  // handle email address input validation
  useEffect(() => {
    const validateEmail = regexEmailValidation.test(emailUpdate.toLowerCase())
    setEmailValidation(!validateEmail)
  }, [emailUpdate])

  const handleUpdateEmplEmail = async event => {
    event.preventDefault()

    // alert user if email address input is empty
    if (!emplEmail) {
      return setEmailHelperText('Please enter an email')
    }

    try {
      const emplEmail = emailUpdate

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
      setEmailHelperText('Invalid email address')

      errorReference.current.focus()
    }
  }

  const isValid = regexEmailValidation.test(emplEmail) ? 'valid' : 'invalid'

  return (
    <>
      <ToolTipSx tooltipTitle={'Update'}>
        <ListItemIconButtonSx onClick={handleClickOpen} aria-label='update' sx={{ mr: '8px' }}>
          <SettingsIcon />
        </ListItemIconButtonSx>
      </ToolTipSx>
      <DialogSx fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ p: '20px 20px 0' }}>
          <CRUDHeaderGroupSx
            disableElevation
            disableFocusRipple
            disableRipple
            startIcon={<BadgeIcon />}>
            <Typography
              variant='h6'
              sx={{
                textTransform: 'none'
              }}>
              {emplName}
            </Typography>
          </CRUDHeaderGroupSx>
          <ListItemIconButtonSx onClick={handleClose}>
            <CloseIcon />
          </ListItemIconButtonSx>
        </Stack>
        <DialogContentSx>
          <DialogContentTextSx>
            Provide a valid email address for {emplName}. The current email address associated with
            this account{' '}
            <span
              style={{
                color: isValid === 'valid' ? UMSwatch.Text.Link : UMSwatch.Coral[400]
              }}>
              {emplEmail}{' '}
            </span>
            , is{' '}
            <span
              style={{
                color: isValid !== 'valid' && UMSwatch.Coral[400]
              }}>
              {isValid}
            </span>
            .
          </DialogContentTextSx>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={30}
            sx={{ mt: '20px' }}>
            <TextFieldSx
              autoFocus
              fullWidth
              error={emailHelperText !== ''}
              id='update-email'
              helperText={emailHelperText}
              placeholder='Update Email Address'
              onChange={event => {
                setEmailUpdate(event.target.value)
              }}
            />
            <SubmissionButtonSx
              disabled={emailValidation}
              onClick={handleUpdateEmplEmail}
              sx={{ textTransform: 'none' }}>
              Update
            </SubmissionButtonSx>
          </Stack>
        </DialogContentSx>
      </DialogSx>
    </>
  )
}
