import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredEmployeeStateSelector, paginatedEmplListAtom } from '../../../recoil-state'
import { Paginate } from '../../../utils'
import { PaginationSx } from '../../mui'

export default function Pagination() {
  const [page, setPage] = useState<number>(1)
  const [numPages, setNumPages] = useState<number>(1)

  const filteredEmployeeState = useRecoilValue(filteredEmployeeStateSelector)

  const setPaginatedEmplList = useSetRecoilState(paginatedEmplListAtom)

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault()
    setPage(value)
  }

  useEffect(() => {
    // check filteredEmployeeState contains a value
    if (filteredEmployeeState === undefined || null) {
      return
    }

    const count = filteredEmployeeState.length

    const pageObj = {
      totalEmpl: count,
      selectedPage: page
    }

    const paginateRes = Paginate(pageObj)

    const emplIDs = filteredEmployeeState?.slice(
      paginateRes.beginningIndex,
      paginateRes.endingIndex + 1
    )
    setPaginatedEmplList(emplIDs)

    setNumPages(paginateRes.totalPages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filteredEmployeeState])

  // return pagination component only if there are more than one page
  return (
    <>
      {numPages > 1 && (
        <PaginationSx count={numPages} shape='rounded' page={page} onChange={handleChange} />
      )}
    </>
  )
}
