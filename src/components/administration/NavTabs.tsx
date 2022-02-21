import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import { SyntheticEvent, useState } from 'react'
import { IEmployee } from '../../hooks/useGetEmployees'
import UMSwatch from '../../style/UMSwatch'
import { filteredEmplEmails } from '../../utils/emailFilters'
import { TabSx } from '../mui/TabPanel.style'
import EmployeeEntry from './EmloyeeEntry'

// import { Divider } from '@mui/material'
//  ;<Divider
//    orientation='vertical'
//    variant='middle'
//    flexItem
//    sx={{ m: '8px 4px', borderColor: UMSwatch.Grey[300] }}
//  />
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
  const filteredEmails = filteredEmplEmails(employees)

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
        <TabSx label={`Total ${filteredEmails.all.length}`} {...a11yProps(1)} />
        <TabSx label={`Invalid ${filteredEmails.invalid.length}`} {...a11yProps(2)} />
        <TabSx label={`Duplicate ${filteredEmails.duplicate.length}`} {...a11yProps(3)} />
        <TabSx label={`Older ${filteredEmails.older.length}`} {...a11yProps(4)} />
      </Tabs>

      <Box
        sx={{
          borderRadius: '4px',
          bgcolor: UMSwatch.White[50]
        }}>
        <TabPanel value={value} index={0}>
          <EmployeeEntry employees={filteredEmails.all} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployeeEntry employees={filteredEmails.invalid} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EmployeeEntry employees={filteredEmails.duplicate} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EmployeeEntry employees={filteredEmails.older} />
        </TabPanel>
      </Box>
    </Box>
  )
}
