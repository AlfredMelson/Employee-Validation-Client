import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { UMSwatch } from '../../../style'
import { CheckIcon } from '../../icons'
import { CircularProgressSx, LoginButtonSx } from '../../mui'

export default function FormSubmission() {
  // useRef to avoid re-renders during button handler
  const interactionTimer = useRef<number>()

  // handle transitions during sumission
  const [submitting, setSubmitting] = useState(false)

  // handle transitions during sumission
  const [successSubmit, setSuccessfulSubmit] = useState(false)

  // handle submission of user typed url
  const handleDataControls = () => {
    if (!submitting) {
      setSuccessfulSubmit(false)
      setSubmitting(true)

      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(true)
        setSubmitting(false)
      }, 1250)

      // intialize state
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(false)
      }, 3000)

      return
    }
  }

  // handle side effect proceeding button handler
  useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <LoginButtonSx aria-label='fetch api' disabled={submitting} onClick={handleDataControls}>
        {!submitting ? (
          <Typography variant='button'>Login</Typography>
        ) : (
          successSubmit && (
            <CheckIcon
              sx={{
                color: UMSwatch.Green[500]
              }}
            />
          )
        )}
      </LoginButtonSx>
      {submitting && <CircularProgressSx />}
    </Box>
  )
}
