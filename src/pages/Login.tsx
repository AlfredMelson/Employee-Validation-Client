import { motion } from 'framer-motion'
import { LoginCard } from '../components'
import { LoginContainerStack } from '../components/mui'
import { loginContainer } from '../style/UMAnimations'

export default function Login() {
  return (
    <motion.section
      className='login-background'
      variants={loginContainer}
      initial='initial'
      animate='animate'
      exit='exit'>
      <LoginContainerStack>
        <LoginCard />
      </LoginContainerStack>
    </motion.section>
  )
}
