import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { UMSwatch } from '../../../style'
import { TabWrapper } from '../../mui'

const SkeletonTab = () => {
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

export default function SkeletonTabs() {
  return (
    <TabWrapper>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        sx={{ gridColumn: 2 }}>
        <SkeletonTab />
        <SkeletonTab />
        <SkeletonTab />
        <SkeletonTab />
      </Stack>
    </TabWrapper>
  )
}
