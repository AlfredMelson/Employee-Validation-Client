import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import MygomSwatch from '../../style/MygomSwatch'

export const LoginButtonSx = styled(Button)(() => ({
  width: '120px',
  height: '42px',
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
  width: '120px',
  height: '42px',
  color: MygomSwatch.Text.Primary,
  backgroundColor: MygomSwatch.Grey[800],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: MygomSwatch.Text.Primary,
    backgroundColor: MygomSwatch.Grey[700]
  },
  '&.Mui-disabled': {
    backgroundColor: MygomSwatch.Grey[800]
  }
}))

export const FilterButtonSx = styled(Button)(() => ({
  width: '120px',
  height: '42px',
  color: MygomSwatch.Text.Primary,
  backgroundColor: MygomSwatch.Grey[800],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: MygomSwatch.Text.Primary,
    backgroundColor: MygomSwatch.Grey[700]
  },
  '&.Mui-disabled': {
    backgroundColor: MygomSwatch.Grey[800]
  }
}))
