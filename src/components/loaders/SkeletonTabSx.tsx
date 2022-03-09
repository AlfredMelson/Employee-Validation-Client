import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { UMSwatch } from '../../style'
import { TabWrapper } from '../mui'

function SkeletonTabStyle() {
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

export default function SkeletonTabSx() {
  return (
    <TabWrapper>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        sx={{ gridColumn: 2 }}>
        <SkeletonTabStyle />
        <SkeletonTabStyle />
        <SkeletonTabStyle />
        <SkeletonTabStyle />
      </Stack>
    </TabWrapper>
  )
}
