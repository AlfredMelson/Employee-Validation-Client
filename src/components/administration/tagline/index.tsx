import Typography from '@mui/material/Typography'
import { UMSwatch } from '../../../style'

export default function AdminTagline() {
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
      Protect your company from erroneous registrations.
    </Typography>
  )
}
