import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

interface IFilterTab {
  title: string
  count: number
  path: string
}

const FilterTab: FunctionComponent<IFilterTab> = ({ title, count, path }) => {
  const navigate = useNavigate()

  return (
    <div className='filter-tab' onClick={() => navigate(path)}>
      {`${title} (${count})`}
    </div>
  )
}

export default FilterTab
