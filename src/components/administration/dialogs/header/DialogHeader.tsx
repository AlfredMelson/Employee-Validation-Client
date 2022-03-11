import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { UMSwatch } from '../../../../style'
import { CloseIcon } from '../../../icons'
import { IconButtonSx } from '../../../mui'

interface IDialogHeader {
  title: string
  onClick: any
}

export default function DialogHeader({ title, onClick }: IDialogHeader) {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ p: '20px 20px 0' }}>
      <Typography
        variant='h6'
        sx={{
          color: UMSwatch.Gold[50],
          ml: '10px'
        }}>
        {title}
      </Typography>
      <IconButtonSx onClick={onClick}>
        <CloseIcon />
      </IconButtonSx>
    </Stack>
  )
}
