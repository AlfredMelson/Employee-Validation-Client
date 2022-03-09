import Skeleton from '@mui/material/Skeleton'
import { UMSwatch } from '../../style'
import { TabPanelWrapper } from '../mui'

export default function SkeletonPanelSx() {
  return (
    <TabPanelWrapper>
      <Skeleton
        sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
        variant='rectangular'
        width={550}
        height={72}
      />
    </TabPanelWrapper>
  )
}
