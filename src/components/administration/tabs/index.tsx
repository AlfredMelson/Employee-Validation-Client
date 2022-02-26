import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Tabs from '@mui/material/Tabs'
import { SyntheticEvent, useState } from 'react'
import { Empl } from '../../../api/empl'
import { useEmployeesContext } from '../../../context'
import { UMSwatch } from '../../../style'
import { EmplEmailFilters } from '../../../utils'
import { BadgeSx, TabSx } from '../../mui'
import RegistrantList from '../panel'
import AdminErrorTabsTitle from './AdminErrorTabsTitle'

interface ITabData {
  index: number
  label: string
  value: number
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

interface IAdminSelectorTabs {
  employees: Empl[]
}

export default function AdminSelectorTabs({ employees }: IAdminSelectorTabs) {
  const { isLoading: isEmployeesLoading } = useEmployeesContext()

  const filteredEmails = EmplEmailFilters(employees)

  const [value, setValue] = useState(0)

  const TabData: ITabData[] = [
    {
      index: 2,
      label: 'Invalid',
      value: filteredEmails.invalid.length,
      disable: filteredEmails.invalid.length === 0
    },
    {
      index: 3,
      label: 'Duplicate',
      value: filteredEmails.duplicate.length,
      disable: filteredEmails.duplicate.length === 0
    },
    {
      index: 4,
      label: 'Older',
      value: filteredEmails.older.length,
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
    <>
      {isEmployeesLoading ? (
        <Tabs
          centered
          value={value}
          aria-label='selector tabs skeleton'
          scrollButtons
          allowScrollButtonsMobile
          classes={{ indicator: 'indicator' }}>
          <Box sx={{ mx: '8px' }}>
            <Skeleton
              sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
              variant='rectangular'
              width={110}
              height={48}
            />
          </Box>
          <Box sx={{ mx: '8px' }}>
            <Skeleton
              sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
              variant='rectangular'
              width={110}
              height={48}
            />
          </Box>
          <Box sx={{ mx: '8px' }}>
            <Skeleton
              sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
              variant='rectangular'
              width={110}
              height={48}
            />
          </Box>
          <Box sx={{ mx: '8px' }}>
            <Skeleton
              sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
              variant='rectangular'
              width={110}
              height={48}
            />
          </Box>
        </Tabs>
      ) : (
        <>
          <AdminErrorTabsTitle />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '20px 1fr 20px',
              alignItems: 'center'
            }}>
            <Tabs
              centered
              sx={{ gridColumn: 2, pb: '4px' }}
              value={value}
              onChange={handleChange}
              aria-label='selector tabs'
              variant='scrollable'
              scrollButtons='auto'
              classes={{ indicator: 'indicator' }}>
              <TabSx label='Registrants' {...a11yProps(1)} />
              {TabData.map(tab => (
                <TabSx
                  key={tab.index}
                  label={tab.label}
                  disabled={tab.disable}
                  {...a11yProps(tab.index)}
                  icon={
                    tab.index !== 1 &&
                    tab.value !== 0 && (
                      <BadgeSx
                        badgeContent={tab.value}
                        color='error'
                        sx={{ pl: '14px', mr: '14px' }}
                      />
                    )
                  }
                  iconPosition='end'
                />
              ))}
            </Tabs>
          </Box>
        </>
      )}
      {isEmployeesLoading ? (
        <Box
          sx={{
            borderRadius: '4px',
            m: '20px'
          }}>
          <Skeleton
            sx={{ bgcolor: UMSwatch.Gold[50], borderRadius: '4px' }}
            variant='rectangular'
            width={550}
            height={72}
          />
        </Box>
      ) : (
        <Box
          sx={{
            bgcolor: 'transparent',
            m: '20px 20px '
          }}>
          {PanelData.map(panel => (
            <TabPanel key={panel.index} value={panel.value} index={panel.index}>
              <RegistrantList employees={panel.employees} />
            </TabPanel>
          ))}
        </Box>
      )}
    </>
  )
}
