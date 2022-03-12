import { alpha } from '@mui/material/styles'
import { UMSwatch } from '../../../style'
import { SecurityIcon } from '../../icons'

interface ISecurityIconSx {
  submitting: boolean
  disabled: boolean
  loginHover: boolean
}

export default function SecurityIconSx({ submitting, disabled, loginHover }: ISecurityIconSx) {
  return (
    <SecurityIcon
      sx={{
        width: '24px',
        height: '24px',
        color: disabled
          ? UMSwatch.Grey[600]
          : submitting
          ? UMSwatch.Black[100]
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
