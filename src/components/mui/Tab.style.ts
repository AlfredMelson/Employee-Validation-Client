import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import UMSwatch from '../../style/UMSwatch'

export const TabSx = styled(Tab)(({ theme }) => ({
  minWidth: '120px',
  margin: '0 10px',
  textTransform: 'none',
  borderRadius: '4px',
  color: UMSwatch.Blue[500],
  // backgroundColor: alpha(UMSwatch.Blue[500], 0.05),
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused': {
    borderRadius: '4px',
    color: UMSwatch.Blue[400],
    backgroundColor: UMSwatch.Grey[700]
  },
  '&.Mui-selected': {
    cursor: 'default',
    borderRadius: '4px',
    color: UMSwatch.White[100],
    backgroundColor: UMSwatch.Grey[700]
  },
  '.indicator': {
    backgroundColor: 'transparent'
  },
  '&.MuiButtonBase-root, &.MuiTab-root': {
    minHeight: '30px',
    height: '48px'
  }
}))
