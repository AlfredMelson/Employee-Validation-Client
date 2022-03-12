import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import { AxiosResponse } from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import axios from '../../../../api/axiosCustom'
import { AddEmplDialogStateAtom } from '../../../../recoil-state'
import { loginFieldTitle } from '../../../../style'
import { API, AxiosEmplUpdateConfig, regexEmailValidation } from '../../../../utils'
import { DialogContentSx, TextFieldSx, TypoTextfieldSx } from '../../../mui'
import AddRegistrant from '../submissions/AddRegistrant'

export default function AddEmplTextfields() {
  // update email dialog state
  const setAddEmplDialogState = useSetRecoilState(AddEmplDialogStateAtom)

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

  console.log('emailValidation', emailValidation)
  // completed form validation state
  const [formValidation, setFormValidation] = useState<boolean>(false)

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // reset alert when either the username or password state changes
      setNameHelperText('')
      setEmailHelperText('')
      setRoleHelperText('')
      setFormValidation(false)
    }
  }, [newEmplEmail])

  // handle email address input validation
  useEffect(() => {
    const validateEmail = regexEmailValidation.test(newEmplEmail.toLowerCase())
    setEmailValidation(!validateEmail)
  }, [newEmplEmail])

  const handleAddEmpl = async (event) => {
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

      setAddEmplDialogState(false)

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
    <DialogContentSx>
      <motion.div variants={loginFieldTitle}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto'
          }}>
          <motion.div variants={loginFieldTitle} style={{ gridColumn: '1 / span 2', gridRow: 1 }}>
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>First name</TypoTextfieldSx>
          </motion.div>
          <TextFieldSx
            autoFocus
            id='firstname'
            placeholder='First name'
            error={nameHelperText !== ''}
            onChange={(event) => {
              setNewEmplName(event.target.value)
            }}
            helperText={nameHelperText}
            sx={{ gridColumn: '1 / span 2', gridRow: 2, paddingRight: '24px' }}
          />
          <motion.div variants={loginFieldTitle} style={{ gridColumn: '3 / span 2', gridRow: 1 }}>
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>Last name</TypoTextfieldSx>
          </motion.div>
          <TextFieldSx
            id='lastname'
            placeholder='Last name'
            error={nameHelperText !== ''}
            onChange={(event) => {
              setNewEmplName(event.target.value)
            }}
            helperText={nameHelperText}
            sx={{ gridColumn: '3 / span 2', gridRow: 2 }}
          />
          <motion.div variants={loginFieldTitle} style={{ gridColumn: '1 / span 3', gridRow: 3 }}>
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>Email Address</TypoTextfieldSx>
          </motion.div>
          <TextFieldSx
            id='update-email'
            placeholder='Update Email Address'
            error={emailHelperText !== ''}
            onChange={(event) => {
              setNewEmplEmail(event.target.value)
            }}
            helperText={emailHelperText}
            sx={{ gridColumn: '1 / span 3', gridRow: 4, paddingRight: '24px' }}
          />
          <motion.div variants={loginFieldTitle} style={{ gridColumn: 4, gridRow: 3 }}>
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>User Role</TypoTextfieldSx>
          </motion.div>
          <TextFieldSx
            select
            id='select-role'
            value={newEmplRole}
            onChange={(event) => {
              setNewEmplRole(event.target.value)
            }}
            error={roleHelperText !== ''}
            helperText={roleHelperText}
            sx={{ gridColumn: 4, gridRow: 4 }}>
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldSx>
          <Box sx={{ gridColumn: 4, gridRow: 6 }}>
            <AddRegistrant
              verified={formValidation}
              onClick={handleAddEmpl}
              btnText='Add'
              // submitting={submitting}
              // successSubmit={successSubmit}
            />
          </Box>
        </Box>
      </motion.div>
    </DialogContentSx>
  )
}
