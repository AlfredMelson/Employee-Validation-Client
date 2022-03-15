import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { AddEmplDialogStateAtom } from '../../../recoil-state'
import { loginCard, loginHeading } from '../../../style'
import { AddEmplIcon } from '../../icons'
import { DialogSx, IconButtonSx, ToolTipSx } from '../../mui'
import { AddEmplContent } from './content'
import { DialogHeader } from './header'

export default function AddEmployeeDialog() {
  // update email dialog state

  const [addEmplDialogState, setAddEmplDialogState] = useRecoilState(AddEmplDialogStateAtom)

  return (
    <>
      <ToolTipSx tooltipTitle={'Add Registrant'}>
        <IconButtonSx
          onClick={() => {
            setAddEmplDialogState(true)
          }}
          aria-label='Add Registrant'
          sx={{ mr: '10px' }}>
          <AddEmplIcon />
        </IconButtonSx>
      </ToolTipSx>
      <motion.div variants={loginCard}>
        <DialogSx
          open={addEmplDialogState}
          onClose={() => {
            setAddEmplDialogState(false)
          }}>
          <motion.div variants={loginHeading}>
            <DialogHeader
              title='Add New Registrant'
              onClick={() => {
                setAddEmplDialogState(false)
              }}
            />
          </motion.div>
          <AddEmplContent />
        </DialogSx>
      </motion.div>
    </>
  )
}
