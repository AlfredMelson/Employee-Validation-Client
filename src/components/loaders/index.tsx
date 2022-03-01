import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { UMSwatch } from '../../style'

export const SkeletonTab = () => {
  return (
    <Box sx={{ mx: '10px' }}>
      <Skeleton
        sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
        variant='rectangular'
        width={120}
        height={48}
      />
    </Box>
  )
}

export const SkeletonPanel = () => {
  return (
    <Skeleton
      sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
      variant='rectangular'
      width={550}
      height={72}
    />
  )
}
