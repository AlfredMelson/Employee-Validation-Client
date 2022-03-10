import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { motion } from 'framer-motion'
import { UMSwatch } from '../../style'
import { loginCard, loginHeading } from '../../style/UMAnimations'
import { AlertHeader } from './alert'
import { LoginTextFields } from './form'
import { LoginHeader } from './header'

export default function LoginCard() {
  return (
    <motion.div variants={loginCard}>
      <Card
        raised
        sx={{
          backgroundColor: UMSwatch.Grey[800],
          borderRadius: '4px'
        }}>
        <AlertHeader />
        <motion.div variants={loginHeading}>
          <LoginHeader />
        </motion.div>
        <CardContent sx={{ mx: { xs: '10px', sm: '20px', md: '30px' } }}>
          <LoginTextFields />
        </CardContent>
      </Card>
    </motion.div>
  )
}
