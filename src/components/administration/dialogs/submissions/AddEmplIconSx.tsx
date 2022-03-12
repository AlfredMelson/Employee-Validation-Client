import { alpha } from '@mui/material/styles'
import { UMSwatch } from '../../../../style'
import { AddEmplIcon } from '../../../icons'

interface IAddEmplIconSx {
  verified: boolean
  submitting: boolean
  loginHover: boolean
}

export default function AddEmplIconSx({ verified, submitting, loginHover }: IAddEmplIconSx) {
  return (
    <AddEmplIcon
      sx={{
        width: '20px',
        height: '20px',
        color:
          !verified || submitting
            ? alpha(UMSwatch.Black[100], 0.3)
            : loginHover
            ? UMSwatch.Gold[50]
            : alpha(UMSwatch.Gold[50], 0.8),
        transition: (theme) =>
          theme.transitions.create(['all'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut
          })
      }}
    />
  )
}
