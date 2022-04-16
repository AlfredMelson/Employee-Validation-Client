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
export const pushAdminStateAtom = atom<string>({
  key: 'pushAdminState',
  default: ''
})
// const [pushAdminState, setPushAdminState] = useRecoilState(pushAdminStateAtom)
// const setPushAdminState = useSetRecoilState(pushAdminStateAtom)
// const pushAdminState = useRecoilValue(pushAdminStateAtom)
// const resetPushAdminState= useResetRecoilState(pushAdminStateAtom)
