import IconButton from '@mui/material/IconButton'
import { alpha, styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const DeleteIconButtonSx = styled(IconButton)(({ theme }) => ({
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  borderRadius: '4px',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Blue[600],
    backgroundColor: alpha(UMSwatch.Blue[100], 0.3)
  }
}))

export const AdminHeaderIconButtonSx = styled(IconButton)(({ theme }) => ({
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

export const IconButtonSx = styled(IconButton)(({ theme }) => ({
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
    color: UMSwatch.Blue[400],
    borderRadius: '4px',
    backgroundColor: UMSwatch.Grey[800]
  }
}))
