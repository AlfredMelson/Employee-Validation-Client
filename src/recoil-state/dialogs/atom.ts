import { atom } from 'recoil'

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const AddEmplDialogStateAtom = atom<boolean>({
  key: 'addEmplDialogState',
  default: false
})
// const [addEmplDialogState, setAddEmplDialogState] = useRecoilState(AddEmplDialogStateAtom)
// const setAddEmplDialogState = useSetRecoilState(AddEmplDialogStateAtom)
// const addEmplDialogState = useRecoilValue(AddEmplDialogStateAtom)
// const resetAddEmplDialogState= useResetRecoilState(AddEmplDialogStateAtom)
