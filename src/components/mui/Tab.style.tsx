import { alpha, styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import { UMSwatch } from '../../style'

export const TabStyle = styled(Tab, {
  name: 'Tab',
  slot: 'styled'
})(({ theme }) => ({
  minWidth: '120px',
  margin: '0 10px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '4px',
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused': {
    color: UMSwatch.Blue[400]
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: UMSwatch.White[100]
  },
  '.indicator': {
    backgroundColor: 'transparent'
  },
  '&.MuiButtonBase-root, &.MuiTab-root': {
    minHeight: '30px',
    height: '48px'
  }
}))

export const SelectedTabSx = styled(Tab, {
  name: 'MotionTab',
  slot: 'styled'
})(() => ({
  minWidth: '120px',
  margin: '0 10px',
  backgroundColor: alpha(UMSwatch.Grey[500], 0.1)
}))
export const UnselectedTabSx = styled(Tab, {
  name: 'MotionTab',
  slot: 'styled'
})(() => ({
  minWidth: '120px',
  margin: '0 10px',
  backgroundColor: 'transparent'
}))
