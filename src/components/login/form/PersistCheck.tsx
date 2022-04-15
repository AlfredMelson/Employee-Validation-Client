import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import { useEffect } from 'react'
import { useAuth } from '../../../hooks'
import { UMSwatch } from '../../../style'
import { CheckboxSx } from '../../mui'

export default function PersistCheck() {
  const { persist, setPersist } = useAuth()

  const togglePersist = () => {
    setPersist((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem('persist', persist)
  }, [persist])

  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Box
        sx={{
          position: 'relative',
          margin: { xs: '10px 0 0', sm: '12px 0 0', md: '12px 0 0' },
          p: 0
        }}>
        <FormControlLabel
          sx={{ color: UMSwatch.White[100] }}
          control={<CheckboxSx onChange={togglePersist} checked={persist} />}
          label='Trust This Device'
        />
      </Box>
    </Stack>
  )
}
