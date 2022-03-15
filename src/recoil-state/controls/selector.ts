import { atom, selector } from 'recoil'
import { Empl } from '../../api'
import { TabValueType } from '../../components/administration/tabs/types'
import { EmailErrorFilter, SortFilteredList } from '../../utils'

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
export const employeeFilterStateAtom = atom<TabValueType>({
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
    const sort: 'alphabetical' | 'reverse' = get(alphabeticalSortAtom)
    const filter: TabValueType = get(employeeFilterStateAtom)
    const allEmployees: Empl[] = get(employeeStateAtom)
    const filteredEmails = EmailErrorFilter(allEmployees)

    if (sort === 'alphabetical') {
      switch (filter) {
        case 'all':
          return SortFilteredList(filteredEmails.all)
        case 'invalid':
          return SortFilteredList(filteredEmails.invalid)
        case 'duplicate':
          return SortFilteredList(filteredEmails.duplicate)
        case 'old':
          return SortFilteredList(filteredEmails.old)
      }
    }

    if (sort === 'reverse') {
      switch (filter) {
        case 'all':
          return SortFilteredList(allEmployees).reverse()
        case 'invalid':
          return SortFilteredList(filteredEmails.invalid).reverse()
        case 'duplicate':
          return SortFilteredList(filteredEmails.duplicate).reverse()
        case 'old':
          return SortFilteredList(filteredEmails.old).reverse()
      }
    }
  }
})
