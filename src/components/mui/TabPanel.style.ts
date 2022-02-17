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
