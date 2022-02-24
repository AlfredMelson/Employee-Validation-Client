import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export const BadgeSx = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: -3,
    padding: '0 4px',
    boxShadow: theme.shadows[2]
  }
}))
