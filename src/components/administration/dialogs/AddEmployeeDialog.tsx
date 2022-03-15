import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { AddEmplDialogStateAtom } from '../../../recoil-state'
import { loginCard, loginHeading } from '../../../style'
import { AddEmplIcon } from '../../icons'
import { DialogSx, IconButtonSx, ToolTipSx } from '../../mui'
import { DialogHeader } from './header'
import { AddEmplTextfields } from './textfields'

export default function AddEmployeeDialog() {
  // update email dialog state

  const [addEmplDialogState, setAddEmplDialogState] = useRecoilState(AddEmplDialogStateAtom)

  const theme = useTheme()

  // dialog width on tablet size and smaller
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setAddEmplDialogState(true)
  }

  const handleClose = () => {
    setAddEmplDialogState(false)
  }

  return (
    <>
      <ToolTipSx tooltipTitle={'Add Registrant'}>
        <IconButtonSx onClick={handleClickOpen} aria-label='add registrant' sx={{ mr: '10px' }}>
          <AddEmplIcon />
        </IconButtonSx>
      </ToolTipSx>
      <motion.div variants={loginCard}>
        <DialogSx fullScreen={fullScreen} open={addEmplDialogState} onClose={handleClose}>
          <motion.div variants={loginHeading}>
            <DialogHeader title='Add Registrant' onClick={handleClose} />
          </motion.div>
          <AddEmplTextfields />
        </DialogSx>
      </motion.div>
    </>
  )
}
