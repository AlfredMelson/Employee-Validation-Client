import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import { UMSwatch } from '../../style'

export const CardSx = styled(Card)(({ theme }) => ({
  backgroundColor: UMSwatch.Grey[800],
  [theme.breakpoints.only('xs')]: {
    borderRadius: '0px',
    minWidth: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '4px',
    minWidth: '600px'
  }
}))
