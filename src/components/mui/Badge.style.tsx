import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export const BadgeSx = styled((props: BadgeProps) => (
  <Badge color='error' {...props} sx={{ pl: '14px', mr: '14px' }} />
))(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: -3,
    boxShadow: theme.shadows[0]
  }
}))
