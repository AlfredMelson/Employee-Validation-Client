import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import { UMSwatch } from '../../style'

export const ToggleButtonSx = styled(ToggleButton)(({ theme }) => ({
  height: '36px',
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused ': {
    color: UMSwatch.Blue[400],
    backgroundColor: UMSwatch.Grey[900]
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: UMSwatch.White[50],
    backgroundColor: 'transparent'
  },
  '&.Mui-disabled': {
    color: 'transparent',
    backgroundColor: 'transparent'
  }
}))
