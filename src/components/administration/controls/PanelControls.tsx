import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'
import { adminCollocate, adminPaginate } from '../../../style/UMAnimations'
import Collocation from './Collocation'
import Pagination from './Pagination'

export default function PanelControls() {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      sx={{ padding: '0 0 14px' }}>
      <motion.div variants={adminCollocate}>
        <Collocation />
      </motion.div>
      <motion.div variants={adminPaginate}>
        <Pagination />
      </motion.div>
    </Stack>
  )
}
