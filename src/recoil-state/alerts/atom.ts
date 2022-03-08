import { atom } from 'recoil'

/**
 * Recoil managed state representing errors during admin login
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const loginAlertErrorAtom = atom<boolean>({
  key: 'loginAlertError',
  default: false
})
// const [loginAlertError, setLoginAlertError] = useRecoilState(loginAlertErrorAtom)
// const setLoginAlertError = useSetRecoilState(loginAlertErrorAtom)
// const loginAlertError = useRecoilValue(loginAlertErrorAtom)
// const resetLoginAlertError = useResetRecoilState(loginAlertErrorAtom)

/**
 * Recoil managed state representing errors during admin login
 *
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Utilise hooks to manage state changes and notify components subscribing to re-render.
 *
 */
export const loginErrorMessageAtom = atom<string>({
  key: 'loginErrorMessage',
  default: ''
})
// const [loginErrorMessage, setLoginErrorMessage] = useRecoilState(loginErrorMessageAtom)
// const setLoginErrorMessage = useSetRecoilState(loginErrorMessageAtom)
// const loginErrorMessage = useRecoilValue(loginErrorMessageAtom)
// const resetLoginErrorMessage = useResetRecoilState(loginErrorMessageAtom)
