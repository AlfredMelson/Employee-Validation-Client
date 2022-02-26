import Typography from '@mui/material/Typography'
import { SecurityIcon } from '../../icons'
import { LogoNameGroupingSx } from '../../mui'

export default function LogoAppName() {
  return (
    <LogoNameGroupingSx
      disableElevation
      disableFocusRipple
      disableRipple
      startIcon={<SecurityIcon sx={{ width: 24, height: 24 }} />}>
      <Typography
        variant='h6'
        sx={{
          textTransform: 'none'
        }}>
        Registrant Validation
      </Typography>
    </LogoNameGroupingSx>
  )
}
