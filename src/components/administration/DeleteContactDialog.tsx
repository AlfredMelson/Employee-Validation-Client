import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AxiosResponse } from 'axios'
import { ChangeEvent, useRef, useState } from 'react'
import axios from '../../api/axiosCustom'
import { API, AxiosEmplUpdateConfig } from '../../utils'
import { BadgeIcon, CloseIcon } from '../icons'
import { DialogContentSx, DialogContentTextSx, DialogSx, ToolTipSx } from '../mui'
import { HeaderButtonSx, UpdateButtonSx } from '../mui/Button.style'
import { CloseIconButtonSx, DeleteIconButtonSx } from '../mui/IconButton.style'

interface IDeleteContactDialog {
  emplId: string
  emplName: string
  emplRole: string
  emplEmail: string
}

export default function DeleteContactDialog({
  emplId,
  emplName,
  emplRole,
  emplEmail
}: IDeleteContactDialog) {
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

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const handleUpdateEmplEmail = async event => {
    event.preventDefault()

    try {
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
      errorReference.current.focus()
    }
  }

  const [checked, setChecked] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <>
      <ToolTipSx tooltipTitle={'Delete registrant'} placement='right'>
        <DeleteIconButtonSx onClick={handleClickOpen} aria-label='delete'>
          <PersonRemoveIcon />
        </DeleteIconButtonSx>
      </ToolTipSx>
      <DialogSx fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ p: '20px 20px 0' }}>
          <HeaderButtonSx
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
          </HeaderButtonSx>
          <CloseIconButtonSx onClick={handleClose}>
            <CloseIcon />
          </CloseIconButtonSx>
        </Stack>
        <DialogContentSx>
          <DialogContentTextSx>
            Are you sure that you wish to continue with the deletion of {emplName}'s account?
          </DialogContentTextSx>
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            spacing={30}
            sx={{ mt: '20px' }}>
            <FormControl component='fieldset' variant='standard'>
              <FormLabel component='legend'>Account deletion</FormLabel>
              <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label={emplName}
              />
            </FormControl>
            <UpdateButtonSx
              disabled={!checked}
              onClick={handleUpdateEmplEmail}
              sx={{ textTransform: 'none' }}>
              Delete
            </UpdateButtonSx>
          </Stack>
        </DialogContentSx>
      </DialogSx>
    </>
  )
}
