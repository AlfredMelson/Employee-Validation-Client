import { Stack } from '@mui/material'
import Alert from '@mui/material/Alert'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import { useRecoilValue } from 'recoil'
import { loginAlertErrorAtom, loginErrorMessageAtom } from '../../../recoil-state'
import { UMSwatch } from '../../../style'

export default function AlertHeader() {
  const loginErrorMessage = useRecoilValue(loginErrorMessageAtom)
  const loginAlertError = useRecoilValue(loginAlertErrorAtom)
  return (
    <CardHeader
      title={
        <Collapse in={loginAlertError}>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ backgroundColor: UMSwatch.Coral[500], borderRadius: '4px', height: '40px' }}>
            <Alert sx={{ p: 0, backgroundColor: 'transparent' }} variant='filled' severity='error'>
              {loginErrorMessage}
            </Alert>
          </Stack>
        </Collapse>
      }
    />
  )
}
