import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const AdminIconButtonSx = styled(IconButton)(({ theme }) => ({
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Blue[400]
  }
}))

export const ListItemIconButtonSx = styled(IconButton)(({ theme }) => ({
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Blue[400]
  }
}))
