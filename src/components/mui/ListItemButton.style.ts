import ListItemButton from '@mui/material/ListItemButton'
import { styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const ListItemButtonSx = styled(ListItemButton)(() => ({
  borderRadius: 0,
  backgroundColor: UMSwatch.Coral[100],
  '&:first-child': {
    borderRadius: '4px 4px 0 0',
    backgroundColor: UMSwatch.Blue[100]
  },
  '&:last-child': {
    borderRadius: '0 0 4px 4px',
    backgroundColor: UMSwatch.Green[100]
  }
}))
