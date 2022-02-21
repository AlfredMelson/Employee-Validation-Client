import { alpha, styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import UMSwatch from '../../style/UMSwatch'

export const TabSx = styled(Tab)(() => ({
  minWidth: '110px',
  margin: '0 8px',
  textTransform: 'none',
  color: UMSwatch.Text.Link,
  backgroundColor: UMSwatch.Grey[100],
  borderRadius: '4px ',
  boxShadow: 'none',
  '&:hover, &.Mui-focused': {
    backgroundColor: alpha(UMSwatch.White[50], 0.7)
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: UMSwatch.Black[50],
    backgroundColor: UMSwatch.White[50]
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
