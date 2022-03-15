import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { CircularProgressSx, SubmitButtonSx } from '../../mui'
import { CheckedProgressSx } from '../../mui/Progress.style'
import SecurityIconSx from './SecurityIconSx'

interface ILoginSubmission {
  onClick: any
  disabled: boolean
  submitting: boolean
  successSubmit: boolean
}

export default function LoginSubmission({
  onClick,
  disabled,
  submitting,
  successSubmit
}: ILoginSubmission) {
  const [loginHover, setLoginHover] = useState(false)

  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Box
        sx={{
          position: 'relative',
          margin: { xs: '20px 0 0', sm: '24px 0 0', md: '24px 0 0' },
          p: 0
        }}>
        <SubmitButtonSx
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={() => setLoginHover(true)}
          onMouseLeave={() => setLoginHover(false)}
          startIcon={
            <SecurityIconSx submitting={submitting} disabled={disabled} loginHover={loginHover} />
          }>
          {!submitting && 'Login'}
        </SubmitButtonSx>
        {submitting && (!successSubmit ? <CircularProgressSx /> : <CheckedProgressSx />)}
      </Box>
    </Stack>
  )
}
