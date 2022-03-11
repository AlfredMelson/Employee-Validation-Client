import Tabs from '@mui/material/Tabs'
import { useRecoilState, useRecoilValue } from 'recoil'
import { employeeFilterStateAtom, employeeStateAtom } from '../../../recoil-state'
import { EmailFilters } from '../../../utils'
import { BadgeSx, TabStyle, TabWrapper } from '../../mui'
import TabBackground from './TabBackground'
import { ITabData } from './types'

function a11yProps(value: string) {
  return {
    id: `select-tab-${value}`,
    'aria-controls': `select-panel-${value}`
  }
}

export default function TabOptions() {
  const [employeeFilterState, setEmployeeFilterState] = useRecoilState(employeeFilterStateAtom)

  const employeeState = useRecoilValue(employeeStateAtom)

  const filteredEmails = EmailFilters(employeeState)

  const InvalidLabel = filteredEmails?.invalid.length === 0 ? 'No invalid' : 'Invalid'
  const DuplicateLabel = filteredEmails?.duplicate.length === 0 ? 'No duplicate' : 'Duplicate'
  const OldLabel = filteredEmails?.old.length === 0 ? 'No old' : 'Old'

  const TabData: ITabData[] = [
    {
      index: 0,
      label: 'Registrants',
      value: 'all',
      errorQuantity: 0,
      disable: false
    },
    {
      index: 1,
      label: `${InvalidLabel}`,
      value: 'invalid',
      errorQuantity: filteredEmails?.invalid.length,
      disable: filteredEmails?.invalid.length === 0
    },
    {
      index: 2,
      label: `${DuplicateLabel}`,
      value: 'duplicate',
      errorQuantity: filteredEmails?.duplicate.length,
      disable: filteredEmails?.duplicate.length === 0
    },
    {
      index: 3,
      label: `${OldLabel}`,
      value: 'old',
      errorQuantity: filteredEmails?.old.length,
      disable: filteredEmails?.old.length === 0
    }
  ]

  const handleChange = (
    _event: React.SyntheticEvent,
    value: 'all' | 'invalid' | 'duplicate' | 'old'
  ) => {
    setEmployeeFilterState(value)
  }

  return (
    <TabWrapper>
      <TabBackground employeeFilterState={employeeFilterState} />
      <Tabs
        aria-label='selector tabs'
        variant='scrollable'
        scrollButtons='auto'
        value={employeeFilterState}
        onChange={handleChange}
        sx={{ gridColumn: 2, gridRow: 1 }}>
        {TabData.map((tab) => (
          <TabStyle
            key={tab.index}
            label={tab.label}
            value={tab.value}
            disabled={tab.disable}
            {...a11yProps(tab.value)}
            icon={
              <BadgeSx
                badgeContent={tab.errorQuantity}
                sx={{
                  display: tab.errorQuantity === 0 && 'none'
                }}
              />
            }
            iconPosition='end'
          />
        ))}
      </Tabs>
    </TabWrapper>
  )
}
