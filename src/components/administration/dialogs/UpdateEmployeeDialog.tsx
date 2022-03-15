import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { UpdateEmplDialogStateAtom } from '../../../recoil-state'
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
  const [updateEmplDialogState, setUpdateEmplDialogState] =
    useRecoilState(UpdateEmplDialogStateAtom)

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
          />
        </DialogSx>
      </motion.div>
    </>
  )
}
