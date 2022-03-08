import Alert from '@mui/material/Alert'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import { useRecoilValue } from 'recoil'
import { loginAlertErrorAtom, loginErrorMessageAtom } from '../../../recoil-state'

export default function AlertHeader() {
  const loginErrorMessage = useRecoilValue(loginErrorMessageAtom)
  const loginAlertError = useRecoilValue(loginAlertErrorAtom)
  return (
    <CardHeader
      title={
        <Collapse in={loginAlertError}>
          <Alert sx={{ m: '4px' }} variant='filled' severity='error'>
            {loginErrorMessage}
          </Alert>
        </Collapse>
      }
    />
  )
}
