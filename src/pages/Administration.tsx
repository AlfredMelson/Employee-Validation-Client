import { motion } from 'framer-motion'
import { Dashboard } from '../components'
import { AdministrationContainerStack } from '../components/mui'

export default function Administration() {
  return (
    <motion.section exit={{ opacity: 0 }} className='dashboard-background'>
      <AdministrationContainerStack>
        <Dashboard />
      </AdministrationContainerStack>
    </motion.section>
  )
}
