import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SelectedTabSx, UnselectedTabSx } from '../../mui'

interface ITabBackground {
  employeeFilterState: string
}

export default function TabBackground({ employeeFilterState }: ITabBackground) {
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
          gridTemplateColumn: 'repeat(4, min(120px))'
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
