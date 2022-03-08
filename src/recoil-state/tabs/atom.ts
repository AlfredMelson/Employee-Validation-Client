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
export const selectedTabAtom = atom<number>({
  key: 'selectedTab',
  default: 0
})
// const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom)
// const setSelectedTab = useSetRecoilState(selectedTabAtom)
// const selectedTab = useRecoilValue(selectedTabAtom)
// const resetSelectedTab = useResetRecoilState(selectedTabAtom)
