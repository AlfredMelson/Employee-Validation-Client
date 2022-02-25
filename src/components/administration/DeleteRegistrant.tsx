import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AxiosResponse } from 'axios'
import { ChangeEvent, useRef, useState } from 'react'
import axios from '../../api/axiosCustom'
import { UMSwatch } from '../../style'
import { API, AxiosEmplUpdateConfig } from '../../utils'
import { BadgeIcon, CloseIcon, PersonRemoveIcon } from '../icons'
import { DialogContentSx, DialogContentTextSx, DialogSx, ToolTipSx } from '../mui'
import { CRUDHeaderSx, UpdateButtonSx } from '../mui/Button.style'
import { ListItemIconButtonSx } from '../mui/IconButton.style'

interface IDeleteRegistrant {
  emplId: string
  emplName: string
  emplRole: string
  emplEmail: string
}

export default function DeleteRegistrant({
  emplId,
  emplName,
  emplRole,
  emplEmail
}: IDeleteRegistrant) {
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
      <ToolTipSx tooltipTitle={'Delete'}>
        <ListItemIconButtonSx onClick={handleClickOpen} aria-label='delete' sx={{ mr: '4px' }}>
          <PersonRemoveIcon />
        </ListItemIconButtonSx>
      </ToolTipSx>
      <DialogSx fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ p: '20px 20px 0' }}>
          <CRUDHeaderSx disableElevation disableFocusRipple disableRipple startIcon={<BadgeIcon />}>
            <Typography
              variant='h6'
              sx={{
                textTransform: 'none'
              }}>
              {emplName}
            </Typography>
          </CRUDHeaderSx>
          <ListItemIconButtonSx onClick={handleClose}>
            <CloseIcon />
          </ListItemIconButtonSx>
        </Stack>
        <DialogContentSx>
          <DialogContentTextSx>
            Are you sure that you wish to continue with the deletion of {emplName}'s account?
          </DialogContentTextSx>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={20}
            sx={{ mt: '20px' }}>
            <FormControlLabel
              sx={{ color: UMSwatch.Coral[400] }}
              control={<Switch checked={checked} onChange={handleChange} />}
              label={emplName}
            />
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
