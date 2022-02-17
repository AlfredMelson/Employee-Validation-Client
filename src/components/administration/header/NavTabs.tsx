import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { SyntheticEvent, useState } from 'react'
import { IEmployee } from '../../../hooks/useGetEmployees'
import MygomSwatch from '../../../style/MygomSwatch'
import { oldPassword, reusedEmail, wrongEmail } from '../../../utils'
import EmployeeEntry from '../list'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <>
          <Typography>{children}</Typography>
        </>
      )}
    </div>
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
    <Box
      sx={{
        width: '100%',
        bgcolor: MygomSwatch.White[50],
        borderRadius: '4px'
      }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          pt: '10px'
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='nav tabs example'
          variant='fullWidth'
          sx={{ padding: '0 20px' }}>
          <Tab label={`All ${employees.length}`} {...a11yProps(0)} />
          <Tab label={`Wrong ${wrongEmailCount}`} {...a11yProps(1)} />
          <Tab label={`Reused ${reusedemployeesCount}`} {...a11yProps(2)} />
          <Tab label={`Old ${oldPasswordCount}`} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box sx={{ bgcolor: 'transparent', borderRadius: '4px' }}>
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
