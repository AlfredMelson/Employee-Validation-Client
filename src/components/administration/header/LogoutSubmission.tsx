import Box from '@mui/material/Box'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { logoutErrorHandlingAtom } from '../../../recoil-state'
import { IconButtonSx } from '../../mui'
import LogoutIconSx from './LogoutIconSx'

interface ILogoutSubmission {
  onClick: any
}

export default function LogoutSubmission({ onClick }: ILogoutSubmission) {
  const [loginHover, setLoginHover] = useState(false)

  const logoutErrorHandling = useRecoilValue(logoutErrorHandlingAtom)

  const { logoutDisabled, logoutSubmitting, logoutSuccessfulSubmit } = logoutErrorHandling

  return (
    <Box
      sx={{
        position: 'relative'
      }}>
      <IconButtonSx
        sx={{ mr: '4px' }}
        disabled={logoutDisabled}
        onClick={onClick}
        onMouseEnter={() => setLoginHover(true)}
        onMouseLeave={() => setLoginHover(false)}>
        <LogoutIconSx
          submitting={logoutSubmitting}
          disabled={logoutDisabled}
          successfulSubmit={logoutSuccessfulSubmit}
          loginHover={loginHover}
        />
      </IconButtonSx>
    </Box>
  )
}
