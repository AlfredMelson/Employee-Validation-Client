import { atom, selector } from 'recoil'
import { Empl } from '../../api'
import { EmplEmailFilters } from '../../utils'

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const employeeStateAtom = atom<Empl[]>({
  key: 'employeeState',
  default: []
})
// const [employeeState, setEmployeeState] = useRecoilState(employeeStateAtom)
// const setEmployeeState = useSetRecoilState(employeeStateAtom)
// const employeeState = useRecoilValue(employeeStateAtom)
// const resetEmployeeState = useResetRecoilState(employeeStateAtom)

// const alphabeticalEmployeeSort = useRecoilValue(alphabeticalEmployeeSortSelector)

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const paginatedEmplListAtom = atom<Empl[]>({
  key: 'paginatedEmplList',
  default: []
})
// const [paginatedEmplList, setPaginatedEmplList] = useRecoilState(paginatedEmplListAtom)
// const setPaginatedEmplList = useSetRecoilState(paginatedEmplListAtom)
// const paginatedEmplList = useRecoilValue(paginatedEmplListAtom)
// const resetPaginatedEmplList = useResetRecoilState(paginatedEmplListAtom)

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const alphabeticalSortAtom = atom<'alphabetical' | 'reverse'>({
  key: 'alphabeticalSort',
  default: 'alphabetical'
})
// const [alphabeticalSort, setAlphabeticalSort] = useRecoilState(alphabeticalSortAtom)
// const setAlphabeticalSort = useSetRecoilState(alphabeticalSortAtom)
// const alphabeticalSort = useRecoilValue(alphabeticalSortAtom)
// const resetAlphabeticalSort = useResetRecoilState(alphabeticalSortAtom)

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const sortedEmplListAtom = atom<Empl[]>({
  key: 'sortedEmplList',
  default: []
})
// const [sortedEmplList, setSortedEmplList] = useRecoilState(sortedEmplListAtom)
// const setSortedEmplList = useSetRecoilState(sortedEmplListAtom)
// const sortedEmplList = useRecoilValue(sortedEmplListAtom)
// const resetSortedEmplList = useResetRecoilState(sortedEmplListAtom)

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const employeeFilterStateAtom = atom<'all' | 'invalid' | 'duplicate' | 'old'>({
  key: 'employeeFilterState',
  default: 'all'
})
// const [employeeFilterState, setEmployeeFilterState] = useRecoilState(employeeFilterStateAtom)
// const setEmployeeFilterState = useSetRecoilState(employeeFilterStateAtom)
// const employeeFilterState = useRecoilValue(employeeFilterStateAtom)
// const resetEmployeeFilterState= useResetRecoilState(employeeFilterStateAtom)

export const filteredEmployeeStateSelector = selector<Empl[]>({
  key: 'filteredEmployeeState',
  get: ({ get }) => {
    const filter = get(employeeFilterStateAtom)
    const allEmployees = get(employeeStateAtom)

    const filteredEmails = EmplEmailFilters(allEmployees)

    switch (filter) {
      case 'invalid':
        return filteredEmails.invalid
      case 'duplicate':
        return filteredEmails.duplicate
      case 'old':
        return filteredEmails.old
      default:
        return filteredEmails.all
    }
  }
})

// export const alphabeticalEmployeeSelector = selector<Empl[]>({
//   key: 'alphabeticalEmployeeSort',
//   get: ({ get }) => {
//     const employeeFilterState = get(filteredEmployeeStateSelector)
//     console.log('alphabeticalEmployeeSort - employeeFilterState:', employeeFilterState)

//     const alphabeticalSort = get(alphabeticalSortAtom)
//     console.log('alphabeticalEmployeeSort - alphabeticalSort:', alphabeticalSort)

//     const sortedEmpls = EmplSorting(employeeFilterState)
//     console.log('alphabeticalEmployeeSort - sortedEmpls:', sortedEmpls)

//     if (employeeFilterState.length === 0) {
//       return []
//     }

//     // sort employee list by lastname alphabetically

//     switch (alphabeticalSort) {
//       case 'alphabetical':
//         return sortedEmpls.alphabetical
//       // case 'reverse':
//       //   return sortedEmpls.reverse
//     }
//   }
// })

//   const filteredEmails = EmplEmailFilters(paginatedEmpl)

//   const InvalidLabel = filteredEmails.invalid.length === 0 ? 'No invalid' : 'Invalid'
//   const DuplicateLabel = filteredEmails.duplicate.length === 0 ? 'No duplicate' : 'Duplicate'
//   const OldLabel = filteredEmails.old.length === 0 ? 'No old' : 'Old'

//   const TabData: ITabData[] = [
//     {
//       index: 0,
//       label: 'Registrants',
//       errorQuantity: 0,
//       disable: false
//     },
//     {
//       index: 1,
//       label: `${InvalidLabel}`,
//       errorQuantity: filteredEmails.invalid.length,
//       disable: filteredEmails.invalid.length === 0
//     },
//     {
//       index: 2,
//       label: `${DuplicateLabel}`,
//       errorQuantity: filteredEmails.duplicate.length,
//       disable: filteredEmails.duplicate.length === 0
//     },
//     {
//       index: 3,
//       label: `${OldLabel}`,
//       errorQuantity: filteredEmails.old.length,
//       disable: filteredEmails.old.length === 0
//     }
//   ]
