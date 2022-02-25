import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { LoginCard } from '../components'

const LoginStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'Login', slot: 'stack' }
)(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center'
  }
}))

export default function Login() {
  return (
    <motion.section exit={{ opacity: 0 }} className='app-background'>
      <LoginStack>
        <LoginCard />
      </LoginStack>
    </motion.section>
  )
}
