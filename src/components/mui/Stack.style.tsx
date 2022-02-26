import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

export const RegistrationContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'RegistrationContainer', slot: 'stack' }
)(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center'
  }
}))

export const LoginContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'LoginContainer', slot: 'stack' }
)(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center'
  }
}))

export const AdministrationContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'AdministrationContainer', slot: 'stack' }
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

export const NoMatchContainerStack = styled(
  (props: StackProps) => (
    <Stack direction='column' justifyContent='flex-start' alignItems='center' {...props} />
  ),
  { name: 'NoMatchContainer', slot: 'stack' }
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
