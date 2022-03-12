import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { UMSwatch } from '../../../../style'
import { CheckIcon } from '../../../icons'
import { CircularProgressSx, LoginButtonSx } from '../../../mui'
import AddEmplIconSx from './AddEmplIconSx'

interface IAddRegistrant {
  onClick: any
  btnText: string
  verified: boolean
  submitting?: boolean
  successSubmit?: boolean
}

export default function AddRegistrant({
  onClick,
  btnText,
  verified,
  submitting,
  successSubmit
}: IAddRegistrant) {
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
          disabled={!verified || submitting}
          onClick={onClick}
          onMouseEnter={() => setLoginHover(true)}
          onMouseLeave={() => setLoginHover(false)}
          startIcon={
            <AddEmplIconSx verified={verified} submitting={submitting} loginHover={loginHover} />
          }>
          {!submitting
            ? btnText
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
