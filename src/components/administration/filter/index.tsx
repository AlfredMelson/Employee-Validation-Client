import { Stack } from '@mui/material'
import { FunctionComponent } from 'react'
import { IEmployee } from '../../../hooks/useGetEmployees'
import { AppRoutes, oldPassword, reusedEmail, wrongEmail } from '../../../utils'
import FilterTab from './FilterTab'

interface IFilter {
  employees: Array<IEmployee>
}

const Filter: FunctionComponent<IFilter> = ({ employees }) => {
  const wrongEmailCount = employees.filter(wrongEmail).length

  const reusedemployeesCount = employees.filter(item => reusedEmail(item, employees)).length

  const oldPasswordCount = employees.filter(oldPassword).length

  return (
    <Stack direction='row' justifyContent='space-evenly' alignItems='center' spacing={2}>
      <FilterTab title='all' count={employees.length} path='/' />
      <FilterTab title='Wrong' count={wrongEmailCount} path={AppRoutes.Weak} />
      <FilterTab title='Reused' count={reusedemployeesCount} path={AppRoutes.Reused} />
      <FilterTab title='Old' count={oldPasswordCount} path={AppRoutes.Old} />
    </Stack>
  )
}

export default Filter
