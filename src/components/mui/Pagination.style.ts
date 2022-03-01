import IconButton from '@mui/material/IconButton'
import Pagination from '@mui/material/Pagination'
import { styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const AdminPaginationICSx = styled(IconButton)(({ theme }) => ({
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Blue[400]
  }
}))

export const PaginationSX = styled(Pagination)(({ theme }) => ({
  color: UMSwatch.Blue[500],

  ['.MuiPaginationItem-rounded ']: {
    color: UMSwatch.Blue[500],
    backgroundColor: 'transparent',
    width: '36px',
    height: '36px',
    borderRadius: '4px',
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    }),
    '&:hover, &.Mui-focused ': {
      color: UMSwatch.Blue[400],
      backgroundColor: UMSwatch.Grey[900]
    },
    '&.Mui-selected': {
      color: UMSwatch.White[100],
      backgroundColor: 'transparent'
    },
    '&.Mui-disabled': {
      color: 'transparent',
      backgroundColor: 'transparent'
    }
  }
}))
