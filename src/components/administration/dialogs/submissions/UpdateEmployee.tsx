import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { UMSwatch } from '../../../../style'
import { CheckIcon } from '../../../icons'
import { CircularProgressSx, SubmitButtonSx } from '../../../mui'
import AddEmplIconSx from './AddEmplIconSx'

interface IUpdateEmployee {
  onClick: any
  btnText: string
  verified: boolean
  submitting?: boolean
  successSubmit?: boolean
}

export default function UpdateEmployee({
  onClick,
  btnText,
  verified,
  submitting,
  successSubmit
}: IUpdateEmployee) {
  const [loginHover, setLoginHover] = useState(false)

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ position: 'relative' }}>
      <SubmitButtonSx
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
      </SubmitButtonSx>
      {submitting && <CircularProgressSx />}
    </Stack>
  )
}
