import * as React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { alphabeticalSortAtom, filteredEmployeeStateSelector } from '../../../recoil-state'
import { ToggleButtonGroupSx, ToggleButtonSx } from '../../mui'

export default function Collocation() {
  const [alphabeticalSort, setAlphabeticalSort] = useRecoilState(alphabeticalSortAtom)

  const filteredEmployeeState = useRecoilValue(filteredEmployeeStateSelector)

  const handleSort = (
    _event: React.MouseEvent<HTMLElement>,
    newSorting: 'alphabetical' | 'reverse'
  ) => {
    if (newSorting !== 'alphabetical') {
      setAlphabeticalSort(newSorting)
    }
  }

  const sortData = [
    { index: 0, value: 'alphabetical', label: 'Sort alphabetical' },
    { index: 1, value: 'reverse', label: 'Reverse sort' }
  ]

  return (
    <>
      {filteredEmployeeState?.length >= 2 && (
        <ToggleButtonGroupSx
          size='small'
          value={alphabeticalSort}
          exclusive
          onChange={handleSort}
          aria-label='text alignment'>
          {sortData.map((sort) => (
            <ToggleButtonSx
              key={sort.index}
              value={sort.value}
              label={sort.label}
              selection={alphabeticalSort}
            />
          ))}
        </ToggleButtonGroupSx>
      )}
    </>
  )
}
