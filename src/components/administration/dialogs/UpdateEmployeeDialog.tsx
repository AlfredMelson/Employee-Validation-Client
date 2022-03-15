import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react'
import { DialogSx, IconButtonSx, ToolTipSx } from '../../mui'
import { DialogHeader } from './header'
import { UpdateEmplTextfield } from './textfields'

interface IUpdateEmployeeDialog {
  emplId: string
  emplFirstname: string
  emplLastname: string
  emplRole: string
  emplEmail: string
}

export default function UpdateEmployeeDialog({
  emplId,
  emplFirstname,
  emplLastname,
  emplRole,
  emplEmail
}: IUpdateEmployeeDialog) {
  // update email dialog state
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ToolTipSx tooltipTitle={'Update'}>
        <IconButtonSx onClick={handleClickOpen} aria-label='update' sx={{ mr: '8px' }}>
          <SettingsIcon />
        </IconButtonSx>
      </ToolTipSx>
      <DialogSx open={open} onClose={handleClose}>
        <DialogHeader title={[emplFirstname, emplLastname].join(' ')} onClick={handleClose} />

        <UpdateEmplTextfield
          emplId={emplId}
          emplFirstname={emplFirstname}
          emplLastname={emplLastname}
          emplRole={emplRole}
          emplEmail={emplEmail}
        />
      </DialogSx>
    </>
  )
}
