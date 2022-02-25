import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export const BadgeSx = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: -3,
    boxShadow: theme.shadows[0]
  }
}))
