import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ChangeEvent, useState } from 'react'
import { EmplProvider } from '../../../context'
import { UMSwatch } from '../../../style'
import { BadgeIcon, CloseIcon, RemoveEmplIcon } from '../../icons'
import {
  CRUDHeaderGroupSx,
  DialogContentSx,
  DialogContentTextSx,
  DialogSx,
  ListItemIconButtonSx,
  SubmissionButtonSx,
  ToolTipSx
} from '../../mui'

export default function RegistrantDeletion(emplId, emplFirstname, emplLastname) {
  // update email dialog state
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const deleteEmpl = EmplProvider

  // dialog width on tablet size and smaller
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // error reference
  // const errorReference = useRef<HTMLParagraphElement | null>(null)

  // const handleEmplDeletion = async event => {
  //   event.preventDefault()
  //   deleteEmpl(emplEmail)

  //   try {
  //     // const response = await axios.delete(
  //     //   // pull in the update endpoint
  //     //   API.DeleteEmployee,

  //     //   // pull in the employee data
  //     //   JSON.stringify({ emplName, emplEmail })
  //     // )

  //     await api.delete(`${API.DeleteEmployee}/${emplEmail}`)
  //     const emplList = empls.filter(empl => empl.emplEmail !== emplEmail)
  //     setEmpls(emplList)

  //     setOpen(false)

  //     // open error alert if there is a caught error
  //   } catch (error) {
  //     errorReference.current.focus()
  //   }
  // }

  const [checked, setChecked] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  // const HeadingText = {[emplFirstname, emplLastname].join(' ')}

  return (
    <>
      <ToolTipSx tooltipTitle={'Delete'}>
        <ListItemIconButtonSx
          onClick={handleClickOpen}
          aria-label='delete registrant'
          sx={{ mr: '4px' }}>
          <RemoveEmplIcon />
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
              {[emplFirstname, emplLastname].join(' ')}
            </Typography>
          </CRUDHeaderGroupSx>
          <ListItemIconButtonSx onClick={handleClose}>
            <CloseIcon />
          </ListItemIconButtonSx>
        </Stack>
        <DialogContentSx>
          <DialogContentTextSx>
            `Are you sure that you wish to continue with the deletion of ${emplFirstname}$
            {emplLastname}'s account?`
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
              label={`${emplFirstname} ${emplLastname}`}
            />
            <SubmissionButtonSx
              disabled={!checked}
              onClick={() => deleteEmpl(emplId)}
              sx={{ textTransform: 'none' }}>
              Delete
            </SubmissionButtonSx>
          </Stack>
        </DialogContentSx>
      </DialogSx>
    </>
  )
}
