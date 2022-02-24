import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import UMSwatch from '../../style/UMSwatch'

export const TabSx = styled(Tab)(({ theme }) => ({
  minWidth: '120px',
  margin: '0 8px',
  textTransform: 'none',
  color: UMSwatch.Blue[500],
  backgroundColor: UMSwatch.Grey[100],
  borderRadius: '4px ',
  boxShadow: 'none',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused': {
    color: UMSwatch.Blue[600],
    backgroundColor: UMSwatch.White[50]
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: UMSwatch.Black[50],
    backgroundColor: UMSwatch.White[50]
  },
  '.indicator': {
    backgroundColor: 'transparent'
  },
  '&.MuiButtonBase-root, &.MuiTab-root': {
    minHeight: '30px',
    height: '48px'
  }
}))
