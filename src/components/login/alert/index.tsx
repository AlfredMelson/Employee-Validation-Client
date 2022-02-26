import Alert from '@mui/material/Alert'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import { MutableRefObject } from 'react'

interface IAlertHeader {
  errorMessage?: string
  errorAlert?: boolean
  errorReference?: MutableRefObject<HTMLParagraphElement>
}

export default function AlertHeader({ errorMessage, errorAlert, errorReference }: IAlertHeader) {
  return (
    <CardHeader
      title={
        <Collapse in={errorAlert}>
          <Alert sx={{ m: '4px' }} variant='filled' severity='error' ref={errorReference}>
            {errorMessage}
          </Alert>
        </Collapse>
      }
    />
  )
}
