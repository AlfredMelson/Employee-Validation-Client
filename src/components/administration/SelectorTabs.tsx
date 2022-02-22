import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import { SyntheticEvent, useState } from 'react'
import { Empl } from '../../api/empl'
import { useEmployeesContext } from '../../context/EmplProvider'
import { UMSwatch } from '../../style'
import { EmplEmailFilters } from '../../utils'
import { TabSx } from '../mui/TabPanel.style'
import EmployeeEntry from './EmloyeeEntry'

// import { Divider } from '@mui/material'
//  ;<Divider
//    orientation='vertical'
//    variant='middle'
//    flexItem
//    sx={{ m: '8px 4px', borderColor: UMSwatch.Grey[300] }}
//  />

interface ITabData {
  index: number
  label: string
  disable: boolean
}
interface IPanelData {
  index: number
  value: number
  employees: Empl[]
}

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

interface ISelectorTabs {
  employees: Empl[]
}

export default function SelectorTabs({ employees }: ISelectorTabs) {
  const { isLoading: isEmployeesLoading } = useEmployeesContext()

  const filteredEmails = EmplEmailFilters(employees)

  const [value, setValue] = useState(0)

  const TabData: ITabData[] = [
    {
      index: 1,
      label: `Total ${filteredEmails.all.length}`,
      disable: filteredEmails.all.length === 0
    },
    {
      index: 2,
      label: `Invalid ${filteredEmails.invalid.length}`,
      disable: filteredEmails.invalid.length === 0
    },
    {
      index: 3,
      label: `Duplicate ${filteredEmails.duplicate.length}`,
      disable: filteredEmails.duplicate.length === 0
    },
    {
      index: 4,
      label: `Older ${filteredEmails.older.length}`,
      disable: filteredEmails.older.length === 0
    }
  ]

  const PanelData: IPanelData[] = [
    { index: 0, value: value, employees: filteredEmails.all },
    { index: 1, value: value, employees: filteredEmails.invalid },
    { index: 2, value: value, employees: filteredEmails.duplicate },
    { index: 3, value: value, employees: filteredEmails.older }
  ]

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      {isEmployeesLoading ? (
        <Tabs
          centered
          value={value}
          aria-label='nav tabs skeleton'
          scrollButtons
          allowScrollButtonsMobile
          classes={{ indicator: 'indicator' }}
          sx={{ mx: '20px' }}>
          <Box sx={{ mx: '8px' }}>
            <Skeleton variant='rectangular' width={110} height={48} />
          </Box>
          <Box sx={{ mx: '8px' }}>
            <Skeleton variant='rectangular' width={110} height={48} />
          </Box>
          <Box sx={{ mx: '8px' }}>
            <Skeleton variant='rectangular' width={110} height={48} />
          </Box>
          <Box sx={{ mx: '8px' }}>
            <Skeleton variant='rectangular' width={110} height={48} />
          </Box>
        </Tabs>
      ) : (
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label='nav tabs example'
          scrollButtons
          allowScrollButtonsMobile
          classes={{ indicator: 'indicator' }}
          sx={{ mx: '20px' }}>
          {TabData.map(tab => (
            <TabSx
              key={tab.index}
              label={tab.label}
              disabled={tab.disable}
              {...a11yProps(tab.index)}
            />
          ))}
        </Tabs>
      )}
      {isEmployeesLoading ? (
        <Box
          sx={{
            borderRadius: '4px',
            m: '20px'
          }}>
          <Skeleton variant='rectangular' width={550} height={72} />
        </Box>
      ) : (
        <Box
          sx={{
            borderRadius: '4px',
            bgcolor: UMSwatch.White[50],
            m: '20px'
          }}>
          {PanelData.map(panel => (
            <TabPanel key={panel.index} value={panel.value} index={panel.index}>
              <EmployeeEntry employees={panel.employees} />
            </TabPanel>
          ))}
        </Box>
      )}
    </Box>
  )
}
