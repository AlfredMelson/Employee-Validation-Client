import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { motion } from 'framer-motion'
import { UMSwatch } from '../../style'
import { AlertHeader } from './alert'
import { LoginTextFields } from './form'
import { LoginHeader } from './header'

export default function LoginCard() {
  const content = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.4,
        delayChildren: 0.4
      }
    },
    exit: { scale: 0 }
  }

  const title = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: { y: 20, opacity: 0 }
  }

  const inputs = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: { opacity: 0 }
  }

  return (
    <motion.div variants={content} animate='animate' initial='initial'>
      <Card
        raised
        sx={{
          backgroundColor: UMSwatch.Grey[800],
          borderRadius: '4px',
          minWidth: '420px',
          maxWidth: '500px',
          minHeight: '400px',
          maxHeight: '500px'
        }}>
        <AlertHeader />
        <motion.div variants={title}>
          <LoginHeader />
        </motion.div>
        <motion.div variants={inputs}>
          <CardContent sx={{ m: '20px' }}>
            <LoginTextFields />
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  )
}
