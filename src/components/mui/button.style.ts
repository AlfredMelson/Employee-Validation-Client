import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const LoginButtonSx = styled(Button)(() => ({
  color: UMSwatch.Text.Primary,
  backgroundColor: UMSwatch.Blue[800],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Text.Primary,
    backgroundColor: UMSwatch.Blue[700]
  },
  '&.Mui-disabled': {
    backgroundColor: UMSwatch.Blue[800]
  }
}))

export const UpdateButtonSx = styled(Button)(() => ({
  minHeight: '38px',
  minWidth: '90px',
  color: UMSwatch.Text.Primary,
  backgroundColor: UMSwatch.Blue[800],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Text.Primary,
    backgroundColor: UMSwatch.Blue[700]
  },
  '&.Mui-disabled': {
    color: UMSwatch.Text.Primary,
    backgroundColor: UMSwatch.Grey[200]
  }
}))

export const UpdateEmailButtonSx = styled(Button)(({ theme }) => ({
  minHeight: '38px',
  textTransform: 'none',
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  border: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Blue[600],
    backgroundColor: alpha(UMSwatch.Blue[100], 0.3),
    border: 'transparent'
  }
}))

export const HeaderButtonSx = styled(Button, {
  name: 'HeaderButton',
  slot: 'style'
})(() => ({
  cursor: 'default',
  textTransform: 'none',
  color: UMSwatch.Gold[50],
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Gold[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))
