import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import { AnimatePresence, motion } from 'framer-motion'
import { SyntheticEvent, useState } from 'react'
import { IEmployee } from '../../hooks/useGetEmployees'
import MygomSwatch from '../../style/MygomSwatch'
import { emplInvalidEmail, emplOldEmail, emplReusedEmail } from '../../utils/emailFilters'
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Box
        component='div'
        role='tabpanel'
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}>
        {value === index && children}
      </Box>
    </motion.div>
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
      <TabsSx
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
        variant='fullWidth'
        classes={{ indicator: 'indicator' }}
        sx={{ p: '0 20px 20px' }}>
        <TabSx label={`All ${employees.length}`} {...a11yProps(0)} />
        <Divider orientation='vertical' variant='middle' flexItem sx={{ mx: '4px' }} />
        <TabSx label={`Invalid ${invalidEmailCount}`} {...a11yProps(1)} />
        <TabSx label={`Reused ${reusedEmailCount}`} {...a11yProps(2)} />
        <TabSx label={`Older ${oldEmailCount}`} {...a11yProps(3)} />
      </TabsSx>

      <AnimatePresence>
        <Box
          sx={{
            borderRadius: '4px',
            bgcolor: MygomSwatch.White[50]
          }}>
          <TabPanel value={value} index={0}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.5 }}>
              <EmployeeEntry employees={employees} />
            </motion.div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.5 }}>
              <EmployeeEntry employees={emplInvalidEmail(employees)} />
            </motion.div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.5 }}>
              <EmployeeEntry
                employees={employees.filter(empl => emplReusedEmail(empl, employees))}
              />
            </motion.div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <motion.div
              variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.5 }}>
              <EmployeeEntry employees={emplOldEmail(employees)} />
            </motion.div>
          </TabPanel>
        </Box>
      </AnimatePresence>
    </Box>
  )
}
