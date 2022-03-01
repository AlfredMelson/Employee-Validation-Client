import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { UMSwatch } from '../../style'
import AlertHeader from './alert'
import LoginHeader from './header'
import LoginTextFields from './textfields'

export default function LoginCard() {
  // Error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const title = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <Card
      raised
      sx={{
        backgroundColor: UMSwatch.Grey[700],
        borderRadius: '4px',
        minWidth: '420px',
        maxWidth: '500px',
        minHeight: '400px',
        maxHeight: '500px'
      }}>
      <AlertHeader
        // errorMessage={errorMessage}
        // errorAlert={errorAlert}
        errorReference={errorReference}
      />
      <motion.div variants={title}>
        <LoginHeader />
      </motion.div>
      <CardContent sx={{ m: '10px' }}>
        <LoginTextFields />
      </CardContent>
    </Card>
  )
}
