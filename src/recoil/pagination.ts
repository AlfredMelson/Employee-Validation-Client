import { atom } from 'recoil'
import { Empl } from '../api/empl'

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const paginatedEmplAtom = atom<Empl[]>({
  key: 'paginatedEmpl',
  default: []
})
// const [paginatedEmpl, setPaginatedEmpl] = useRecoilState(paginatedEmplAtom)
// const setPaginatedEmpl = useSetRecoilState(paginatedEmplAtom)
// const paginatedEmpl = useRecoilValue(paginatedEmplAtom)
// const resetPaginatedEmpl = useResetRecoilState(paginatedEmplAtom)
