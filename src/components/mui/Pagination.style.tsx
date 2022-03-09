import Pagination, { PaginationProps } from '@mui/material/Pagination'
import { styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const PaginationSx = styled((props: PaginationProps) => <Pagination {...props} />, {
  name: 'PaginationSx',
  slot: 'style'
})(({ theme }) => ({
  color: UMSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused ': {
    backgroundColor: 'transparent'
  },
  '&.Mui-selected': {
    cursor: 'default',
    backgroundColor: 'transparent'
  },
  '&.Mui-disabled': {
    color: 'transparent'
  },
  ['.MuiPaginationItem-rounded ']: {
    width: '36px',
    height: '36px',
    borderRadius: '4px',
    fontWeight: 800,
    color: UMSwatch.Blue[500],
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut
    }),
    '&:hover, &.Mui-focused ': {
      color: UMSwatch.Blue[400],
      backgroundColor: 'transparent'
    },
    '&.Mui-selected': {
      cursor: 'default',
      color: UMSwatch.White[50],
      backgroundColor: 'transparent'
    },
    '&.Mui-disabled': {
      color: 'transparent'
    }
  }
}))
