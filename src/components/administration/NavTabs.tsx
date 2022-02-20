import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import { SyntheticEvent, useState } from 'react'
import { IEmployee } from '../../hooks/useGetEmployees'
import UMSwatch from '../../style/UMSwatch'
import { emplInvalidEmail, emplOldEmail, emplReusedEmail } from '../../utils/emailFilters'
import { TabSx } from '../mui/TabPanel.style'
import EmployeeEntry from './EmloyeeEntry'

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

interface INavTabs {
  employees: Array<IEmployee>
}

export default function NavTabs({ employees }: INavTabs) {
  const invalidEmailCount = emplInvalidEmail.length

  const reusedEmailCount = employees.filter(empl => emplReusedEmail(empl, employees)).length

  const oldEmailCount = emplOldEmail.length

  const [value, setValue] = useState(0)

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
        scrollButtons
        allowScrollButtonsMobile
        classes={{ indicator: 'indicator' }}
        sx={{ p: '0 20px 20px' }}>
        <TabSx label={`All ${employees.length}`} {...a11yProps(0)} />
        <Divider
          orientation='vertical'
          variant='middle'
          flexItem
          sx={{ m: '8px 4px', borderColor: UMSwatch.Grey[300] }}
        />
        <TabSx label={`Invalid ${invalidEmailCount}`} {...a11yProps(1)} />
        <TabSx label={`Reused ${reusedEmailCount}`} {...a11yProps(2)} />
        <TabSx label={`Older ${oldEmailCount}`} {...a11yProps(3)} />
      </Tabs>

      <Box
        sx={{
          borderRadius: '4px',
          bgcolor: UMSwatch.White[50]
        }}>
        <TabPanel value={value} index={0}>
          <EmployeeEntry employees={employees} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployeeEntry employees={emplInvalidEmail(employees)} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EmployeeEntry employees={employees.filter(empl => emplReusedEmail(empl, employees))} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EmployeeEntry employees={emplOldEmail(employees)} />
        </TabPanel>
      </Box>
    </Box>
  )
}
