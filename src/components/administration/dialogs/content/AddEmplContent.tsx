import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import { AxiosResponse } from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import axios from '../../../../api/axiosCustom'
import { AddEmplDialogStateAtom } from '../../../../recoil-state'
import { loginFieldTitle } from '../../../../style'
import { API, AxiosConfig, REGEX_Username, regexEmailValidation } from '../../../../utils'
import { DialogContentSx, TextFieldSx, TypoTextfieldSx } from '../../../mui'
import AddEmployee from '../submissions/AddEmployee'

export default function AddEmplContent() {
  // update email dialog state
  const setAddEmplDialogState = useSetRecoilState(AddEmplDialogStateAtom)

  // firstname input state
  const [emplFirstname, setEmplFirstname] = useState('')
  const [firstnameHelperText, setFirstnameHelperText] = useState<string>('')

  // lastname input state
  const [emplLastname, setEmplLastname] = useState('')
  const [lastnameHelperText, setLastnameHelperText] = useState<string>('')

  // email address input state
  const [emplEmail, setEmplEmail] = useState('')
  const [emailHelperText, setEmailHelperText] = useState<string>('')

  // email address input state
  const [emplRole, setEmplRole] = useState('')
  const [roleHelperText, setRoleHelperText] = useState<string>('')

  // email address validation state
  const [emailValidation, setEmailValidation] = useState<boolean>(false)

  // completed form validation state
  const [formValidation, setFormValidation] = useState<boolean>(false)

  // handle form validation state
  useEffect(() => {
    const validFirstname: boolean = emplFirstname !== '' && REGEX_Username.test(emplFirstname)
    const validLastname: boolean = emplLastname !== '' && REGEX_Username.test(emplLastname)
    const validEmail: boolean = regexEmailValidation.test(emplEmail.toLowerCase())
    const validRole: boolean = emplRole === 'Read' || emplRole === 'Write' || emplRole === 'Admin'
    if (validFirstname && validLastname && validEmail && validRole)
      return () => {
        setFormValidation(true)
      }
  }, [emailValidation, emplEmail, emplFirstname, emplLastname, emplRole])

  // handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // reset alert when either the firstname, lastname or password state changes
      setFirstnameHelperText('')
      setLastnameHelperText('')
      setEmailHelperText('')
      setRoleHelperText('')
      setFormValidation(false)
    }
  }, [emplEmail])

  // handle email address input validation
  useEffect(() => {
    const validateEmail = regexEmailValidation.test(emplEmail.toLowerCase())
    setEmailValidation(!validateEmail)
  }, [emplEmail])

  const handleAddEmpl = async (event) => {
    event.preventDefault()

    // alert user if email address input is empty
    if (!emplEmail) {
      return setEmailHelperText('Please enter an email')
    }

    try {
      const response: AxiosResponse = await axios.post(
        // pull in the update endpoint
        API.RegisterEmployee,

        // pull in the employee data
        JSON.stringify({ emplFirstname, emplLastname, emplRole, emplEmail }),

        // pull in axios update config; sending back the secure cookie with the request
        AxiosConfig
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
    }
  }

  const roles = [
    {
      value: '',
      label: 'Role'
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
            error={firstnameHelperText !== ''}
            onChange={(event) => {
              setEmplFirstname(event.target.value)
            }}
            helperText={firstnameHelperText}
            sx={{ gridColumn: '1 / span 2', gridRow: 2, paddingRight: '24px' }}
          />
          <motion.div variants={loginFieldTitle} style={{ gridColumn: '3 / span 2', gridRow: 1 }}>
            <TypoTextfieldSx sx={{ m: '16px 0 4px 10px' }}>Last name</TypoTextfieldSx>
          </motion.div>
          <TextFieldSx
            id='lastname'
            placeholder='Last name'
            error={lastnameHelperText !== ''}
            onChange={(event) => {
              setEmplLastname(event.target.value)
            }}
            helperText={lastnameHelperText}
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
              setEmplEmail(event.target.value)
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
            value={emplRole}
            onChange={(event) => {
              setEmplRole(event.target.value)
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
            <AddEmployee
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
