import { motion } from 'framer-motion'
import { RegistrationCard } from '../components'
import { RegistrationContainerStack } from '../components/mui'

export default function Registration() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <RegistrationContainerStack>
        <RegistrationCard />
      </RegistrationContainerStack>
    </motion.section>
  )
}
