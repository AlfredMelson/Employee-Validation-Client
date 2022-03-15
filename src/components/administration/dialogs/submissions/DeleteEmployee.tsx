import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { UMSwatch } from '../../../../style'
import { CheckIcon } from '../../../icons'
import { CircularProgressSx, SubmitButtonSx } from '../../../mui'
import DeleteEmplIconSx from './DeleteEmplIconSx'

interface IDeleteEmployee {
  onClick: any
  btnText: string
  verified: boolean
  submitting?: boolean
  successSubmit?: boolean
}

export default function DeleteEmployee({
  onClick,
  btnText,
  verified,
  submitting,
  successSubmit
}: IDeleteEmployee) {
  const [loginHover, setLoginHover] = useState(false)

  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Box
        sx={{
          position: 'relative',
          p: 0,
          textTransform: 'none'
        }}>
        <SubmitButtonSx
          disabled={!verified || submitting}
          onClick={onClick}
          onMouseEnter={() => setLoginHover(true)}
          onMouseLeave={() => setLoginHover(false)}
          startIcon={
            <DeleteEmplIconSx verified={verified} submitting={submitting} loginHover={loginHover} />
          }
          sx={{ textTransform: 'none' }}>
          {!submitting
            ? btnText
            : successSubmit && (
                <CheckIcon
                  sx={{
                    color: UMSwatch.Gold[50]
                  }}
                />
              )}
        </SubmitButtonSx>
        {submitting && <CircularProgressSx />}
      </Box>
    </Stack>
  )
}
