import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SecurityIcon } from '../../icons'
import { LogoNameGroupingSx } from '../../mui'

export default function LoginHeader() {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' sx={{ p: '10px 10px 0' }}>
      <LogoNameGroupingSx
        disableElevation
        disableFocusRipple
        disableRipple
        startIcon={<SecurityIcon sx={{ width: 36, height: 36 }} />}>
        <Typography
          variant='h5'
          sx={{
            textTransform: 'none',
            fontSize: '28px',
            pl: '8px'
          }}>
          Registrant Validation
        </Typography>
      </LogoNameGroupingSx>
    </Stack>
  )
}
