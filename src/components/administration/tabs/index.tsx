import Box from '@mui/material/Box'
import { SyntheticEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useEmployeesContext } from '../../../context'
import { paginatedEmplAtom } from '../../../recoil/pagination'
import { EmplEmailFilters } from '../../../utils'
import { SkeletonPanel, SkeletonTab } from '../../loaders'
import { BadgeSx, PanelWrapper, TabsWrapper } from '../../mui'
import { TabSx } from '../../mui/Tab.style'
import { TabsSx } from '../../mui/Tabs.style'
import RegistrantList from '../panels'
import AdminErrorTabsTitle from './AdminErrorTabsTitle'
import { IPanelData, ITabData } from './types'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Box
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && children}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function AdminSelectorTabs() {
  const paginatedEmpl = useRecoilValue(paginatedEmplAtom)
  const { isLoading: isEmployeesLoading } = useEmployeesContext()

  const filteredEmails = EmplEmailFilters(paginatedEmpl)

  const [value, setValue] = useState(0)

  const InvalidLabel = filteredEmails.invalid.length === 0 ? 'No invalid' : 'Invalid'
  const DuplicateLabel = filteredEmails.duplicate.length === 0 ? 'No duplicate' : 'Duplicate'
  const OldLabel = filteredEmails.old.length === 0 ? 'No old' : 'Old'

  const TabData: ITabData[] = [
    {
      index: 2,
      label: `${InvalidLabel}`,
      value: filteredEmails.invalid.length,
      disable: filteredEmails.invalid.length === 0
    },
    {
      index: 3,
      label: `${DuplicateLabel}`,
      value: filteredEmails.duplicate.length,
      disable: filteredEmails.duplicate.length === 0
    },
    {
      index: 4,
      label: `${OldLabel}`,
      value: filteredEmails.old.length,
      disable: filteredEmails.old.length === 0
    }
  ]

  const PanelData: IPanelData[] = [
    { index: 0, value: value, employees: filteredEmails.all },
    { index: 1, value: value, employees: filteredEmails.invalid },
    { index: 2, value: value, employees: filteredEmails.duplicate },
    { index: 3, value: value, employees: filteredEmails.old }
  ]

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <AdminErrorTabsTitle />
      {isEmployeesLoading ? (
        <TabsWrapper>
          <TabsSx>
            <SkeletonTab />
            <SkeletonTab />
            <SkeletonTab />
            <SkeletonTab />
          </TabsSx>
        </TabsWrapper>
      ) : (
        <TabsWrapper>
          <TabsSx value={value} onChange={handleChange} aria-label='selector tabs'>
            <TabSx label='Registrants' {...a11yProps(1)} />
            {TabData.map(tab => (
              <TabSx
                key={tab.index}
                label={tab.label}
                disabled={tab.disable}
                {...a11yProps(tab.index)}
                icon={tab.index !== 1 && tab.value !== 0 && <BadgeSx badgeContent={tab.value} />}
                iconPosition='end'
              />
            ))}
          </TabsSx>
        </TabsWrapper>
      )}
      {isEmployeesLoading ? (
        <PanelWrapper>
          <SkeletonPanel />
        </PanelWrapper>
      ) : (
        <PanelWrapper>
          {PanelData.map(panel => (
            <TabPanel key={panel.index} value={panel.value} index={panel.index}>
              <RegistrantList employees={panel.employees} />
            </TabPanel>
          ))}
        </PanelWrapper>
      )}
    </>
  )
}
