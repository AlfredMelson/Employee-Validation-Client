import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { Dashboard } from '../components'

const DashboardStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'Dashboard', slot: 'stack' }
)(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.only('xs')]: {
    paddingTop: '0px'
  },
  [theme.breakpoints.only('sm')]: {
    paddingTop: '20px'
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '100px'
  }
}))

export default function Administration() {
  return (
    <DashboardStack>
      <Dashboard />
    </DashboardStack>
  )
}
