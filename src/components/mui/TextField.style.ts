import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { UMSwatch } from '../../style'

export const TextFieldSx = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    ...theme.typography.body1,
    fontWeight: '400',
    color: UMSwatch.White[100],
    borderRadius: '4px',
    backgroundColor: UMSwatch.Black[50]
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      cursor: 'pointer',
      borderRadius: '4px',
      border: `2px solid ${UMSwatch.Black[50]}`,
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut
      })
    },
    '&:hover fieldset': {
      border: `2px solid ${UMSwatch.Blue[400]}`
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${UMSwatch.Blue[600]}`
    }
  }
}))
