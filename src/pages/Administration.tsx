import { motion } from 'framer-motion'
import { AdminCard, AuthRequired } from '../components'
import { AdminContainerStack } from '../components/mui'
import { EmplProvider } from '../context'
import { adminContainer } from '../style/UMAnimations'

export default function Administration() {
  return (
    <AuthRequired>
      <motion.section className='dashboard-background' variants={adminContainer}>
        <AdminContainerStack>
          <EmplProvider>
            <AdminCard />
          </EmplProvider>
        </AdminContainerStack>
      </motion.section>
    </AuthRequired>
  )
}
