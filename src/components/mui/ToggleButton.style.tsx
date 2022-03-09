import { styled } from '@mui/material/styles'
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton'
import { UMSwatch } from '../../style'

export const ToggleButtonSx = styled(
  (props: ToggleButtonProps) => <ToggleButton disableRipple {...props} />,
  {
    name: 'ToggleButtonSx',
    slot: 'style'
  }
)(({ theme }) => ({
  height: '36px',
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused ': {
    color: UMSwatch.Blue[400]
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: UMSwatch.White[50]
  },
  '&.Mui-disabled': {
    color: 'transparent'
  }
}))
