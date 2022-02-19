import { alpha, styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import MygomSwatch from '../../style/MygomSwatch'

export const TabSx = styled(Tab)(() => ({
  width: '100px',
  margin: '0 8px',
  textTransform: 'none',
  color: MygomSwatch.Text.Link,
  backgroundColor: MygomSwatch.Grey[100],
  borderRadius: '4px ',
  '&:hover, &.Mui-focused': {
    color: MygomSwatch.Grey[600],
    backgroundColor: alpha(MygomSwatch.White[50], 0.7)
  },
  '&.Mui-selected': {
    transform: 'translateY(-1px)',
    cursor: 'default',
    color: MygomSwatch.Black[50],
    backgroundColor: MygomSwatch.White[50],
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
  },
  '.indicator': {
    backgroundColor: 'transparent'
  }
}))

export const TabsSx = styled(Tabs)(() => ({
  '& .indicator': {
    backgroundColor: 'transparent'
  }
}))
