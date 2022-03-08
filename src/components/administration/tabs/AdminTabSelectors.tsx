import { useEmployeesContext } from '../../../context'
import AdminErrorTabsTitle from './AdminErrorTabsTitle'
import AdminTabPanels from './AdminTabPanels'
import AdminTabs from './AdminTabs'
import SkeletonPanel from './SkeletonPanel'
import SkeletonTabs from './SkeletonTabs'

export default function AdminTabSelectors() {
  const { isLoading: isEmployeeDataLoading } = useEmployeesContext()

  return (
    <>
      <AdminErrorTabsTitle />
      {isEmployeeDataLoading ? <SkeletonTabs /> : <AdminTabs />}
      {isEmployeeDataLoading ? <SkeletonPanel /> : <AdminTabPanels />}
    </>
  )
}
