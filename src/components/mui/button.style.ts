import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import MygomSwatch from '../../style/MygomSwatch'

export const LoginButtonSx = styled(Button)(() => ({
  color: MygomSwatch.Text.Primary,
  backgroundColor: MygomSwatch.Blue[800],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: MygomSwatch.Text.Primary,
    backgroundColor: MygomSwatch.Blue[700]
  },
  '&.Mui-disabled': {
    backgroundColor: MygomSwatch.Blue[800]
  }
}))

export const LogoutButtonSx = styled(Button)(() => ({
  textTransform: 'none',

  borderColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: MygomSwatch.Black[50],
    backgroundColor: MygomSwatch.White[50],
    borderColor: MygomSwatch.White[50]
  }
}))

export const FilterButtonSx = styled(Button)(() => ({
  width: '100px',
  color: MygomSwatch.Grey[800],
  backgroundColor: MygomSwatch.Grey[200],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: MygomSwatch.Text.Primary,
    backgroundColor: MygomSwatch.Grey[700]
  },
  '&.Mui-disabled': {
    backgroundColor: MygomSwatch.Grey[800]
  }
}))

export const UpdateEmailButtonSx = styled(Button)(() => ({
  textTransform: 'none',
  color: MygomSwatch.Text.Primary,
  backgroundColor: MygomSwatch.Green[600],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: MygomSwatch.Text.Primary,
    backgroundColor: MygomSwatch.Green[500]
  },
  '&.Mui-disabled': {
    backgroundColor: MygomSwatch.Green[500]
  }
}))
