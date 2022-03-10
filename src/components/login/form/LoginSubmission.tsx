import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { UMSwatch } from '../../../style'
import { CheckIcon } from '../../icons'
import { CircularProgressSx, LoginButtonSx } from '../../mui'
import SecurityIconSx from './SecurityIconSx'

interface ILoginSubmission {
  onClick: any
  submitting: boolean
  successSubmit: boolean
}

export default function LoginSubmission({ onClick, submitting, successSubmit }: ILoginSubmission) {
  const [loginHover, setLoginHover] = useState(false)

  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Box
        sx={{
          position: 'relative',
          margin: { xs: '20px 0 0', sm: '24px 0 0', md: '24px 0 0' },
          p: 0
        }}>
        <LoginButtonSx
          disabled={submitting}
          onClick={onClick}
          onMouseEnter={() => setLoginHover(true)}
          onMouseLeave={() => setLoginHover(false)}
          startIcon={<SecurityIconSx submitting={submitting} loginHover={loginHover} />}>
          {!submitting
            ? 'Login'
            : successSubmit && (
                <CheckIcon
                  sx={{
                    color: UMSwatch.Gold[50]
                  }}
                />
              )}
        </LoginButtonSx>
        {submitting && <CircularProgressSx />}
      </Box>
    </Stack>
  )
}
