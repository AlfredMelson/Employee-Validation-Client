import Typography from '@mui/material/Typography'
import { UMSwatch } from '../../../style'

export default function Tagline() {
  return (
    <Typography
      variant='body1'
      sx={{
        color: UMSwatch.Gold[50],
        padding: {
          xs: '40px 10px 50px',
          sm: '40px 30px 50px'
        },
        fontWeight: { xs: 700, md: 500 },
        textAlign: 'center',
        fontSize: { xs: '17px', sm: '19px', md: '21px' }
      }}>
      Shield your entity from erroneous registrations.
    </Typography>
  )
}
