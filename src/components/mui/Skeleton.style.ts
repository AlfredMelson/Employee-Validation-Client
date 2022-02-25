import Skeleton from '@mui/material/Skeleton'
import { styled } from '@mui/material/styles'
import { UMSwatch } from '../../style'

export const SkeletonSx = styled(Skeleton)(() => ({
  bgcolor: UMSwatch.Gold[50],
  borderRadius: '4px'
}))
