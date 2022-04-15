import { useEmpl } from '../../../hooks'
import { SkeletonPanelSx, SkeletonTabSx } from '../../loaders'
import AdminErrorTabsTitle from './AdminErrorTabsTitle'
import TabOptions from './TabOptions'
import TabPanels from './TabPanels'

export default function TabSelectors() {
  const { isLoading } = useEmpl()

  return (
    <>
      <AdminErrorTabsTitle />
      {isLoading ? <SkeletonTabSx /> : <TabOptions />}
      {isLoading ? <SkeletonPanelSx /> : <TabPanels />}
    </>
  )
}
