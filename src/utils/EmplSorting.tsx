import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { sortedEmplListAtom } from '../recoil-state'
// import { Empl } from '../api/empl'

function EmplSorting(paginatedList) {
  const [sortedEmplList, setSortedEmplList] = useRecoilState(sortedEmplListAtom)
  console.log('sortedEmplList', sortedEmplList)

  useEffect(() => {
    const alphaSort = paginatedList.sort(function (
      first: { lastname: string },
      second: { lastname: string }
    ) {
      const firstName = first.lastname.toUpperCase() // ignore upper and lowercase
      const secondName = second.lastname.toUpperCase() // ignore upper and lowercase
      if (firstName < secondName) {
        return -1
      }
      if (firstName > secondName) {
        return 1
      }
      // names are the same
      return 0
    })
    console.log('alphaSort', alphaSort)
    setSortedEmplList(alphaSort)
    return
  }, [paginatedList, setSortedEmplList])

  return sortedEmplList
}

export default EmplSorting

// sort employee list by lastname alphabetically
// const sortedEmployees = await response.data.sort(function (
//   first: { lastname: string },
//   second: { lastname: string }
// ) {
//   const firstName = first.lastname.toUpperCase() // ignore upper and lowercase
//   const secondName = second.lastname.toUpperCase() // ignore upper and lowercase
//   if (firstName < secondName) {
//     return -1
//   }
//   if (firstName > secondName) {
//     return 1
//   }
//   // names are the same
//   return 0
// })
