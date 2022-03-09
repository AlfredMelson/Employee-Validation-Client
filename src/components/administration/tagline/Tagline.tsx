import Typography from '@mui/material/Typography'
import { UMSwatch } from '../../../style'

export default function Tagline() {
  return (
    <Typography
      variant='body1'
      sx={{
        color: UMSwatch.Coral[400],
        p: '40px 30px 50px 30px',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '21px'
      }}>
      Shield your entity from erroneous registrations.
    </Typography>
  )
}
