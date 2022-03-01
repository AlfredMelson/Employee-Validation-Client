import Stack from '@mui/material/Stack'
import { ChangeEvent, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { paginatedEmplAtom } from '../../../recoil/pagination'
import { Paginate } from '../../../services/pagination'
import { PaginationSX } from '../../mui'

export default function DashboardPagination(employees) {
  const [page, setPage] = useState<number>(1)
  const [numPages, setNumPages] = useState<number>(1)

  const setPaginatedEmpl = useSetRecoilState(paginatedEmplAtom)

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    event.preventDefault()

    setPage(value)
  }

  useEffect(() => {
    const count = employees.employees.length
    const pages = count / 10

    const pageObj = {
      totalEmpl: count,
      selectedPage: page,
      emplPerPage: 10,
      maxPages: pages
    }

    const pageRes = Paginate(pageObj)

    setPaginatedEmpl(employees.employees.slice(pageRes.beginningIndex, pageRes.endingIndex))
    setNumPages(pageRes.totalPages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, employees])

  return (
    <Stack direction='row' justifyContent='center' alignItems='center' sx={{ padding: '0 0 14px' }}>
      <PaginationSX count={numPages} shape='rounded' page={page} onChange={handleChange} />
    </Stack>
  )
}
