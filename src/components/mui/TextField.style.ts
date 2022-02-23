import { alpha, styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { UMSwatch } from '../../style'

export const TextFieldSx = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    ...theme.typography.body1,
    fontWeight: '500',
    color: UMSwatch.Blue[900],
    backgroundColor: alpha(UMSwatch.Blue[100], 0.3)
  },
  '& .MuiOutlinedInput-root': {
    ...theme.typography.body1,
    color: UMSwatch.Blue[900],
    '& fieldset': {
      borderWidth: '2px',
      borderRadius: '4px',
      borderColor: alpha(UMSwatch.Blue[100], 0.2),
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut
      })
    },
    '&:hover fieldset': {
      borderColor: alpha(UMSwatch.Blue[800], 0.4),
      cursor: 'pointer'
    },
    '&.Mui-focused fieldset': {
      borderColor: alpha(UMSwatch.Blue[800], 0.8),
      borderWidth: '2px'
    }
  }
}))
