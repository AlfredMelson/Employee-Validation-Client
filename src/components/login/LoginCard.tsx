import Card from '@mui/material/Card'
import { motion } from 'framer-motion'
import { loginCard, loginHeading } from '../../style/UMAnimations'
import { AlertHeader } from './alert'
import { LoginTextFields } from './form'
import { LoginHeader } from './header'

export default function LoginCard() {
  return (
    <motion.div variants={loginCard}>
      <Card>
        <AlertHeader />
        <motion.div variants={loginHeading}>
          <LoginHeader />
        </motion.div>
        <LoginTextFields />
      </Card>
    </motion.div>
  )
}
