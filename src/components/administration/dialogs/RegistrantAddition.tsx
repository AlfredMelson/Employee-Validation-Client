import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AxiosResponse } from 'axios'
import { useEffect, useRef, useState } from 'react'
import axios from '../../../api/axiosCustom'
import { API, AxiosEmplUpdateConfig, regexEmailValidation } from '../../../utils'
import { AddEmplIcon, BadgeIcon, CloseIcon } from '../../icons'
import {
  AdminIconButtonSx,
  CRUDHeaderGroupSx,
  DialogContentSx,
  DialogContentTextSx,
  DialogSx,
  ListItemIconButtonSx,
  SubmissionButtonSx,
  TextFieldSx,
  ToolTipSx,
  TypoTextfieldSx
} from '../../mui'

export default function RegistrantAddition() {
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

  // username input state
  const [newEmplName, setNewEmplName] = useState('')
  const [nameHelperText, setNameHelperText] = useState<string>('')

  // email address input state
  const [newEmplEmail, setNewEmplEmail] = useState('')
  const [emailHelperText, setEmailHelperText] = useState<string>('')

  // email address input state
  const [newEmplRole, setNewEmplRole] = useState('')
  const [roleHelperText, setRoleHelperText] = useState<string>('')

  // email address validation state
  const [emailValidation, setEmailValidation] = useState<boolean>(false)

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // reset alert when either the username or password state changes
      setNameHelperText('')
      setEmailHelperText('')
      setRoleHelperText('')
    }
  }, [newEmplEmail])

  // handle email address input validation
  useEffect(() => {
    const validateEmail = regexEmailValidation.test(newEmplEmail.toLowerCase())
    setEmailValidation(!validateEmail)
  }, [newEmplEmail])

  const handleUpdateEmplEmail = async (event) => {
    event.preventDefault()

    // alert user if email address input is empty
    if (!newEmplEmail) {
      return setEmailHelperText('Please enter an email')
    }

    try {
      const response: AxiosResponse = await axios.post(
        // pull in the update endpoint
        API.UpdateEmployee,

        // pull in the employee data
        JSON.stringify({ newEmplName, newEmplRole, newEmplEmail }),

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

  const roles = [
    {
      value: '',
      label: ''
    },
    {
      value: 'read',
      label: 'Read'
    },
    {
      value: 'write',
      label: 'Write'
    },
    {
      value: 'admin',
      label: 'Admin'
    }
  ]

  return (
    <>
      <ToolTipSx tooltipTitle={'Add Registrant'}>
        <AdminIconButtonSx
          onClick={handleClickOpen}
          aria-label='add registrant'
          sx={{ mr: '10px' }}>
          <AddEmplIcon />
        </AdminIconButtonSx>
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
              Add Registrant
            </Typography>
          </CRUDHeaderGroupSx>
          <ListItemIconButtonSx onClick={handleClose}>
            <CloseIcon />
          </ListItemIconButtonSx>
        </Stack>
        <DialogContentSx>
          <DialogContentTextSx>Provide a valid email address.</DialogContentTextSx>
          <Stack direction='column' justifyContent='flex-start' alignItems='flex-start'>
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>Username</TypoTextfieldSx>
            <TextFieldSx
              autoFocus
              id='username'
              placeholder='Username'
              error={nameHelperText !== ''}
              onChange={(event) => {
                setNewEmplName(event.target.value)
              }}
              helperText={nameHelperText}
            />
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>Email Address</TypoTextfieldSx>
            <TextFieldSx
              id='update-email'
              placeholder='Update Email Address'
              error={emailHelperText !== ''}
              onChange={(event) => {
                setNewEmplEmail(event.target.value)
              }}
              helperText={emailHelperText}
            />
            <TypoTextfieldSx sx={{ m: '16px 0 10px 10px' }}>User Role</TypoTextfieldSx>
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={20}
            sx={{ minWidth: '360px' }}>
            <TextFieldSx
              select
              id='select-role'
              value={newEmplRole}
              onChange={(event) => {
                setNewEmplRole(event.target.value)
              }}
              error={roleHelperText !== ''}
              helperText={roleHelperText}>
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextFieldSx>
            <SubmissionButtonSx
              disabled={emailValidation}
              onClick={handleUpdateEmplEmail}
              sx={{ textTransform: 'none' }}>
              Add
            </SubmissionButtonSx>
          </Stack>
        </DialogContentSx>
      </DialogSx>
    </>
  )
}
