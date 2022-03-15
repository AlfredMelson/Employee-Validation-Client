import { motion } from 'framer-motion'
import { useState } from 'react'
import { loginCard, loginHeading } from '../../../style'
import { DeleteEmplIcon } from '../../icons'
import { DialogSx, IconButtonSx, ToolTipSx } from '../../mui'
import { DeleteEmplContent } from './content'
import { DialogHeader } from './header'

interface IDeleteEmployeeDialog {
  emplId: string
  emplFirstname: string
  emplLastname: string
}

export default function DeleteEmployeeDialog({
  emplId,
  emplFirstname,
  emplLastname
}: IDeleteEmployeeDialog) {
  // delete email dialog state
  const [deleteEmplDialogState, setDeleteEmplDialogState] = useState(false)

  return (
    <>
      <ToolTipSx tooltipTitle={'Delete Registrant'}>
        <IconButtonSx
          onClick={() => {
            setDeleteEmplDialogState(true)
          }}
          aria-label='Delete Registrant'
          sx={{ mr: '4px' }}>
          <DeleteEmplIcon />
        </IconButtonSx>
      </ToolTipSx>
      <motion.div variants={loginCard}>
        <DialogSx
          open={deleteEmplDialogState}
          onClose={() => {
            setDeleteEmplDialogState(false)
          }}>
          <motion.div variants={loginHeading}>
            <DialogHeader
              title={[emplFirstname, emplLastname].join(' ')}
              onClick={() => {
                setDeleteEmplDialogState(false)
              }}
            />
          </motion.div>
          <DeleteEmplContent
            emplId={emplId}
            emplFirstname={emplFirstname}
            emplLastname={emplLastname}
            setDeleteEmplDialogState={setDeleteEmplDialogState}
          />
        </DialogSx>
      </motion.div>
    </>
  )
}
