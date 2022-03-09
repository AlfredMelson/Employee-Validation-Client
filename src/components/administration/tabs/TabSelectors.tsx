import { useEmployeesContext } from '../../../context'
import { SkeletonPanelSx, SkeletonTabSx } from '../../loaders'
import AdminErrorTabsTitle from './AdminErrorTabsTitle'
import TabOptions from './TabOptions'
import TabPanels from './TabPanels'

export default function TabSelectors() {
  const { isLoading: isEmployeeDataLoading } = useEmployeesContext()

  return (
    <>
      <AdminErrorTabsTitle />
      {isEmployeeDataLoading ? <SkeletonTabSx /> : <TabOptions />}
      {isEmployeeDataLoading ? <SkeletonPanelSx /> : <TabPanels />}
    </>
  )
}
