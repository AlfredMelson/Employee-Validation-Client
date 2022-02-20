import { alpha, styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import UMSwatch from '../../style/UMSwatch'

export const TabSx = styled(Tab)(() => ({
  width: '110px',
  margin: '0 8px',
  textTransform: 'none',
  color: UMSwatch.Text.Link,
  backgroundColor: UMSwatch.Grey[100],
  borderRadius: '4px ',
  '&:hover, &.Mui-focused': {
    color: UMSwatch.Grey[600],
    backgroundColor: alpha(UMSwatch.White[50], 0.7)
  },
  '&.Mui-selected': {
    transform: 'translateY(-1px)',
    cursor: 'default',
    color: UMSwatch.Black[50],
    backgroundColor: UMSwatch.White[50],
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
