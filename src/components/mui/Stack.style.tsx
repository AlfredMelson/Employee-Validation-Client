import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

export const LoginContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'LoginContainer', slot: 'stack' }
)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  [theme.breakpoints.only('xs')]: {
    padding: '10px 0 0 0'
  },
  [theme.breakpoints.only('sm')]: {
    padding: '50px 0 0 0'
  },
  [theme.breakpoints.only('md')]: {
    padding: '100px 0 0 0'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '200px 0 0 0'
  }
}))

export const AdminContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'AdministrationContainer', slot: 'stack' }
)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  [theme.breakpoints.only('xs')]: {
    paddingTop: '0px'
  },
  [theme.breakpoints.only('sm')]: {
    paddingTop: '20px'
  },
  [theme.breakpoints.up('md')]: {
    padding: '50px 0'
  }
}))

export const NoMatchContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'NoMatchContainer', slot: 'stack' }
)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
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
