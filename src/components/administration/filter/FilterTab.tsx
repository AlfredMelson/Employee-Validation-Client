import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilterButtonSx } from '../../mui/button.style'

interface IFilterTab {
  title: string
  count: number
  path: string
}

const FilterTab: FunctionComponent<IFilterTab> = ({ title, count, path }) => {
  const navigate = useNavigate()

  return (
    <FilterButtonSx className='filter-tab' onClick={() => navigate(path)}>
      {`${title} (${count})`}
    </FilterButtonSx>
  )
}

export default FilterTab
