import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useEmployeesContext } from '../../context'
import { useAuth } from '../../hooks'
import {
  adminCard,
  adminCollocate,
  adminHeading,
  adminPaginate,
  adminTabs,
  adminTagline
} from '../../style/UMAnimations'
import { CardSx } from '../mui'
import { Collocation, Pagination } from './controls'
import { HeaderSection } from './header'
import { TabSelectors } from './tabs'
import { Tagline } from './tagline'

export default function AdminCard() {
  const { getEmployees } = useEmployeesContext()

  const { adminAccessToken } = useAuth()

  console.log('adminAccessToken', adminAccessToken)

  useEffect(() => {
    getEmployees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div variants={adminCard}>
      <CardSx>
        <motion.div variants={adminHeading}>
          <HeaderSection />
        </motion.div>
        <motion.div variants={adminTagline}>
          <Tagline />
        </motion.div>
        <motion.div variants={adminTabs}>
          <TabSelectors />
        </motion.div>
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
      </CardSx>
    </motion.div>
  )
}
