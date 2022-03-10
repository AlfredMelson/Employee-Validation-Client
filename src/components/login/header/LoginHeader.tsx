import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { UMSwatch } from '../../../style'
import { SecurityIcon } from '../../icons'

export default function LoginHeader() {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ margin: { xs: '0 30px 12px', sm: '10px 40px 14px', md: '10px 50px 14px' } }}>
      <SecurityIcon
        sx={{
          color: UMSwatch.Gold[50],
          width: { xs: 29, sm: 34, md: 38 },
          height: { xs: 29, sm: 34, md: 38 }
        }}
      />
      <Typography
        variant='body2'
        sx={{
          textTransform: 'none',
          color: UMSwatch.Gold[50],
          pl: { xs: '10px', sm: '13px', md: '16px' },
          fontSize: { xs: '23px', sm: '26px', md: '27px' }
        }}>
        Registrant Validation
      </Typography>
    </Stack>
  )
}
