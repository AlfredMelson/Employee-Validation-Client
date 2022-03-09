import { motion } from 'framer-motion'
import { RouteMismatch } from '../components'
import { NoMatchContainerStack } from '../components/mui'

export default function Mismatch() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <NoMatchContainerStack>
        <RouteMismatch />
      </NoMatchContainerStack>
    </motion.section>
  )
}
