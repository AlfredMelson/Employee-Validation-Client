import Typography from '@mui/material/Typography'
import { SecurityIcon } from '../../icons'
import { HeaderButtonSx } from '../../mui'

export default function AdminHeaderLogo() {
  return (
    <HeaderButtonSx
      disableElevation
      disableFocusRipple
      disableRipple
      startIcon={<SecurityIcon sx={{ width: 24, height: 24 }} />}>
      <Typography
        variant='h6'
        sx={{
          textTransform: 'none'
        }}>
        Registration Validator
      </Typography>
    </HeaderButtonSx>
  )
}
