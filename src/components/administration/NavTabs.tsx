import Box from '@mui/material/Box'
import { SyntheticEvent, useState } from 'react'
import { IEmployee } from '../../hooks/useGetEmployees'
import MygomSwatch from '../../style/MygomSwatch'
import { oldPassword, reusedEmail, wrongEmail } from '../../utils'
import { TabsSx, TabSx } from '../mui/TabPanel.style'
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
  const wrongEmailCount = employees.filter(wrongEmail).length

  const reusedemployeesCount = employees.filter(item => reusedEmail(item, employees)).length

  const oldPasswordCount = employees.filter(oldPassword).length

  const [value, setValue] = useState(0)

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <TabsSx
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
        variant='fullWidth'
        classes={{ indicator: 'indicator' }}
        sx={{ p: '0 20px 20px' }}>
        <TabSx label={`All ${employees.length}`} {...a11yProps(0)} />
        <TabSx label={`Wrong ${wrongEmailCount}`} {...a11yProps(1)} />
        <TabSx label={`Reused ${reusedemployeesCount}`} {...a11yProps(2)} />
        <TabSx label={`Old ${oldPasswordCount}`} {...a11yProps(3)} />
      </TabsSx>
      <Box sx={{ borderRadius: '4px', bgcolor: MygomSwatch.White[50] }}>
        <TabPanel value={value} index={0}>
          <EmployeeEntry employees={employees} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployeeEntry employees={employees} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EmployeeEntry employees={employees.filter(empl => reusedEmail(empl, employees))} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EmployeeEntry employees={employees} />
        </TabPanel>
      </Box>
    </Box>
  )
}
