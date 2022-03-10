import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { styled } from '@mui/material/styles'
import { UMSwatch } from '../../style'

export const DialogSx = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    bgcolor: UMSwatch.Grey[800]
  }
}))

export const DialogContentSx = styled(DialogContent)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 500
}))

export const DialogContentTextSx = styled(DialogContentText)(() => ({
  color: UMSwatch.White[100],
  px: '30px',
  py: '20px',
  maxWidth: '530px'
}))