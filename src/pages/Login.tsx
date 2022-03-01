import { motion } from 'framer-motion'
import { LoginCard } from '../components'
import { LoginContainerStack } from '../components/mui'

export default function Login() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <LoginContainerStack className='login-background'>
        <LoginCard />
      </LoginContainerStack>
    </motion.section>
  )
}
