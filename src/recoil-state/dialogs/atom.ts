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
// const resetAddEmplDialogState = useResetRecoilState(AddEmplDialogStateAtom)

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const UpdateEmplDialogStateAtom = atom<boolean>({
  key: 'updateEmplDialogState',
  default: false
})
// const [updateEmplDialogState, setUpdateEmplDialogState] = useRecoilState(UpdateEmplDialogStateAtom)
// const setUpdateEmplDialogState = useSetRecoilState(UpdateEmplDialogStateAtom)
// const updateEmplDialogState = useRecoilValue(UpdateEmplDialogStateAtom)
// const resetUpdateEmplDialogState = useResetRecoilState(UpdateEmplDialogStateAtom)

/**
 * Recoil managed state representing employees list per pagination
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const DeleteEmplDialogStateAtom = atom<boolean>({
  key: 'deleteEmplDialogState',
  default: false
})
// const [deleteEmplDialogState, setDeleteEmplDialogState] = useRecoilState(DeleteEmplDialogStateAtom)
// const setDeleteEmplDialogState = useSetRecoilState(DeleteEmplDialogStateAtom)
// const deleteEmplDialogState = useRecoilValue(DeleteEmplDialogStateAtom)
// const resetDeleteEmplDialogState = useResetRecoilState(DeleteEmplDialogStateAtom)
