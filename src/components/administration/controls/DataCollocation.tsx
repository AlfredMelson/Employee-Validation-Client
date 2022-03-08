import * as React from 'react'
import { useRecoilState } from 'recoil'
import { alphabeticalSortAtom } from '../../../recoil-state'
import { ABCIcon, CBAIcon } from '../../icons'
import { ToggleButtonGroupSx, ToggleButtonSx } from '../../mui'

export default function DataCollocation() {
  const [alphabeticalSort, setAlphabeticalSort] = useRecoilState(alphabeticalSortAtom)

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: 'alphabetical' | 'reverse'
  ) => {
    setAlphabeticalSort(newAlignment)
  }

  return (
    <ToggleButtonGroupSx
      size='small'
      value={alphabeticalSort}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'>
      <ToggleButtonSx value='alphabetical' aria-label='alphabetical sort'>
        <ABCIcon />
      </ToggleButtonSx>
      <ToggleButtonSx value='reverse' aria-label='reverse alphabetical sort'>
        <CBAIcon />
      </ToggleButtonSx>
    </ToggleButtonGroupSx>
  )
}
