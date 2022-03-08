import { motion } from 'framer-motion'
import { AdminDashboard } from '../components/administration'
import { AdministrationContainerStack } from '../components/mui'
import { EmplProvider } from '../context'

export default function Administration() {
  return (
    <motion.section exit={{ opacity: 0 }} className='dashboard-background'>
      <AdministrationContainerStack>
        <EmplProvider>
          <AdminDashboard />
        </EmplProvider>
      </AdministrationContainerStack>
    </motion.section>
  )
}
