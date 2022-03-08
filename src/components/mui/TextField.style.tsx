import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { UMSwatch } from '../../style'

/*
 * Change Autocomplete Styles in WebKit Browsers
 * @author Geoff Graham (Updated on Apr 26, 2019)
 * https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
 */

export const TextFieldSx = styled((props: TextFieldProps) => (
  <TextField fullWidth required {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: UMSwatch.White[100],
    backgroundColor: UMSwatch.Black[50],
    '& fieldset': {
      borderRadius: '4px',
      border: `1px solid ${UMSwatch.Black[50]}`,
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut
      })
    },
    '&:hover fieldset': {
      border: `1px solid ${UMSwatch.Blue[400]}`
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${UMSwatch.Blue[700]}`
    },
    '&.Mui-selected fieldset': {
      border: `1px solid ${UMSwatch.Blue[700]}`
    }
  },
  '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus': {
    transition: 'background-color 600000s 0s, color 600000s 0s'
  }
}))
