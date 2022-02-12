import { FC } from 'react'
import { DefinedRouting } from '../../../constants'
import { IItem } from '../../../services/getUserItems'
import { oldPassword, reusedEmail, wrongEmail } from '../../../utils'
import FilterTab from './FilterTab'

interface IFilter {
  items: Array<IItem>
}

const Filter: FC<IFilter> = ({ items }) => {
  const wrongEmailCount = items.filter(wrongEmail).length

  const reusedItemsCount = items.filter(item => reusedEmail(item, items)).length

  const oldPasswordCount = items.filter(oldPassword).length

  return (
    <div className='filter'>
      <FilterTab title='all' count={items.length} path={DefinedRouting.Users} />
      <FilterTab title='Wrong' count={wrongEmailCount} path={DefinedRouting.Weak} />
      <FilterTab title='Reused' count={reusedItemsCount} path={DefinedRouting.Reused} />
      <FilterTab title='Old' count={oldPasswordCount} path={DefinedRouting.Old} />
    </div>
  )
}

export default Filter
