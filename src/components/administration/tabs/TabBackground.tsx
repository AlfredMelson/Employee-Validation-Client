import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { employeeFilterStateAtom } from '../../../recoil-state'
import { UMSwatch } from '../../../style'

const SelectedTabSx = styled(Tab, {
  name: 'MotionTab',
  slot: 'styled'
})(() => ({
  minWidth: '127px',
  margin: '0 10px',
  borderRadius: '4px',
  backgroundColor: UMSwatch.Grey[700]
}))

const UnselectedTabSx = styled(Tab, {
  name: 'MotionTab',
  slot: 'styled'
})(() => ({
  minWidth: '127px',
  margin: '0 10px',
  backgroundColor: 'transparent'
}))

export default function TabBackground() {
  const employeeFilterState = useRecoilValue(employeeFilterStateAtom)

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [unselectedIndexA, setUnselectedIndexA] = useState(1)
  const [unselectedIndexB, setUnselectedIndexB] = useState(2)
  const [unselectedIndexC, setUnselectedIndexC] = useState(3)

  useEffect(() => {
    function optionsFilter() {
      switch (employeeFilterState) {
        case 'all':
          setSelectedIndex(1)
          setUnselectedIndexA(2)
          setUnselectedIndexB(3)
          return setUnselectedIndexC(4)
        case 'invalid':
          setUnselectedIndexA(1)
          setSelectedIndex(2)
          setUnselectedIndexB(3)
          return setUnselectedIndexC(4)
        case 'duplicate':
          setUnselectedIndexA(1)
          setUnselectedIndexB(2)
          setSelectedIndex(3)
          return setUnselectedIndexC(4)
        case 'old':
          setUnselectedIndexA(1)
          setUnselectedIndexB(2)
          setUnselectedIndexC(3)
          return setSelectedIndex(4)
      }
    }
    optionsFilter()
  }, [employeeFilterState])

  return (
    <Box sx={{ gridColumn: 2, gridRow: 1 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumn: 'repeat(4, min(127px))'
        }}>
        <UnselectedTabSx sx={{ gridColumn: unselectedIndexA, gridRow: 1 }} />
        <UnselectedTabSx sx={{ gridColumn: unselectedIndexB, gridRow: 1 }} />
        <UnselectedTabSx sx={{ gridColumn: unselectedIndexC, gridRow: 1 }} />
        <motion.div layout style={{ gridColumn: selectedIndex, gridRow: 1 }}>
          <SelectedTabSx />
        </motion.div>
      </Box>
    </Box>
  )
}
