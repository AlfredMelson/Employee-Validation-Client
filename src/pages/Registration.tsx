import Box from '@mui/material/Box'
import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { RegistrationCard } from '../components'

const RegistrationStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'Registration', slot: 'stack' }
)(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center'
  }
}))

export default function Registration() {
  return (
    <Box component='main'>
      <RegistrationStack>
        <RegistrationCard />
      </RegistrationStack>
    </Box>
  )
}
