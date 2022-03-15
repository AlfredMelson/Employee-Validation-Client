import { motion } from 'framer-motion'
import { useState } from 'react'
import { loginCard, loginHeading } from '../../../style'
import { SettingsIcon } from '../../icons'
import { DialogSx, IconButtonSx, ToolTipSx } from '../../mui'
import { UpdateEmplContent } from './content'
import { DialogHeader } from './header'

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
  const [updateEmplDialogState, setUpdateEmplDialogState] = useState(false)

  return (
    <>
      <ToolTipSx tooltipTitle={'Update Registrant'}>
        <IconButtonSx
          onClick={() => {
            setUpdateEmplDialogState(true)
          }}
          aria-label='Update Registrant'
          sx={{ mr: '8px' }}>
          <SettingsIcon />
        </IconButtonSx>
      </ToolTipSx>
      <motion.div variants={loginCard}>
        <DialogSx
          open={updateEmplDialogState}
          onClose={() => {
            setUpdateEmplDialogState(false)
          }}>
          <motion.div variants={loginHeading}>
            <DialogHeader
              title={[emplFirstname, emplLastname].join(' ')}
              onClick={() => {
                setUpdateEmplDialogState(false)
              }}
            />
          </motion.div>
          <UpdateEmplContent
            emplId={emplId}
            emplFirstname={emplFirstname}
            emplLastname={emplLastname}
            emplRole={emplRole}
            emplEmail={emplEmail}
            setUpdateEmplDialogState={setUpdateEmplDialogState}
          />
        </DialogSx>
      </motion.div>
    </>
  )
}
