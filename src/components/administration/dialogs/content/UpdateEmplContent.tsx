import Stack from '@mui/material/Stack'
import { AxiosResponse } from 'axios'
import { useEffect, useRef, useState } from 'react'
import axios from '../../../../api/axiosCustom'
import { UMSwatch } from '../../../../style'
import { API, AxiosConfig, regexEmailValidation } from '../../../../utils'
import { DialogContentSx, DialogContentTextSx, TextFieldSx } from '../../../mui'
import { UpdateEmployee } from '../submissions'

interface IUpdateEmplContent {
  emplId: string
  emplFirstname: string
  emplLastname: string
  emplRole: string
  emplEmail: string
  setUpdateEmplDialogState: (state: boolean) => void
}

export default function UpdateEmplContent({
  emplId,
  emplFirstname,
  emplLastname,
  emplRole,
  emplEmail,
  setUpdateEmplDialogState
}: IUpdateEmplContent) {
  // email address input state
  const [emailUpdate, setEmailUpdate] = useState<string>('')
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
    const validateEmail: boolean = regexEmailValidation.test(emailUpdate.toLowerCase())
    if (validateEmail) {
      setEmailValidation(true)
    }
  }, [emailUpdate])

  const handleUpdateEmplEmail = async (event) => {
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
        JSON.stringify({ emplId, emplFirstname, emplLastname, emplRole, emplEmail }),

        // pull in axios update config; sending back the secure cookie with the request
        AxiosConfig
      )

      // Return JSON
      console.log(response.data)

      // close dialog if positive response frm server
      // update email address in employee list & ensure recalculation of errors
      // window.location.reload()

      setUpdateEmplDialogState(false)

      // open error alert if there is a caught error
    } catch (error) {
      setEmailHelperText('Invalid email address')

      errorReference.current.focus()
    }
  }

  const isValid = regexEmailValidation.test(emplEmail) ? 'valid' : 'invalid'

  return (
    <DialogContentSx>
      <DialogContentTextSx>
        Provide a valid email address for {[emplFirstname, emplLastname].join(' ')}. The current
        email address associated with this account{' '}
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
          id='update-email'
          error={emailHelperText !== ''}
          helperText={emailHelperText}
          placeholder='Update Email Address'
          onChange={(event) => {
            setEmailUpdate(event.target.value)
          }}
        />
        <UpdateEmployee
          verified={emailValidation}
          onClick={handleUpdateEmplEmail}
          btnText='Update'
          // submitting={submitting}
          // successSubmit={successSubmit}
        />
      </Stack>
    </DialogContentSx>
  )
}
