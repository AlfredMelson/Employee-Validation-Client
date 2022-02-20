import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
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

export const LogoutButtonSx = styled(Button)(() => ({
  textTransform: 'none',
  borderColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Black[50],
    backgroundColor: UMSwatch.White[50],
    borderColor: UMSwatch.White[50]
  }
}))

export const UpdateEmailButtonSx = styled(Button)(() => ({
  textTransform: 'none',
  borderColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Black[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))

export const HeaderButtonSx = styled(Button, {
  name: 'HeaderButton',
  slot: 'style'
})(() => ({
  cursor: 'default',
  textTransform: 'none',
  color: UMSwatch.Black[50],
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Black[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))
