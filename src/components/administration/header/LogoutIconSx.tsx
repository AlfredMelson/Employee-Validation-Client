import { UMSwatch } from '../../../style'
import { LogoutIcon } from '../../icons'
import { CheckedProgressSx } from '../../mui/Progress.style'

interface ILogoutIconSx {
  submitting: boolean
  disabled: boolean
  loginHover: boolean
  successfulSubmit: boolean
}

export default function LogoutIconSx({
  submitting,
  disabled,
  loginHover,
  successfulSubmit
}: ILogoutIconSx) {
  return (
    <>
      {!successfulSubmit ? (
        <LogoutIcon
          sx={{
            color: disabled
              ? UMSwatch.Grey[600]
              : submitting
              ? UMSwatch.Gold[50]
              : loginHover
              ? UMSwatch.Blue[400]
              : UMSwatch.Blue[500],
            transition: (theme) =>
              theme.transitions.create(['all'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut
              })
          }}
        />
      ) : (
        <CheckedProgressSx />
      )}
    </>
  )
}
