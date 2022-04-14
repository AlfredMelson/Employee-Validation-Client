import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useEmployeesContext } from '../../context'
import { adminCard, adminHeading, adminTabs, adminTagline } from '../../style/UMAnimations'
import { CardSx } from '../mui'
import { PanelControls } from './controls'
import { HeaderSection } from './header'
import { TabSelectors } from './tabs'
import { Tagline } from './tagline'

export default function AdminCard() {
  const { getEmployees } = useEmployeesContext()

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
        <PanelControls />
      </CardSx>
    </motion.div>
  )
}
