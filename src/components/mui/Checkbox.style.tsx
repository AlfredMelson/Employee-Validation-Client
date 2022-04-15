import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { alpha, styled } from '@mui/material/styles'
import { UMSwatch } from '../../style'

const BpIcon = styled('span')(() => ({
  width: 18,
  height: 18,
  borderRadius: 3,
  border: '1px solid transparent',
  backgroundColor: UMSwatch.Black[100],
  'input:hover ~ &': {
    border: `1px solid ${alpha(UMSwatch.Gold[50], 0.5)}`
  },
  'input:focused ~ &': {
    border: `1px solid ${alpha(UMSwatch.Gold[50], 0.8)}`
  },
  'input:selected ~ &': {
    border: '1px solid transparent'
  },
  'input:disabled ~ &': {
    border: '1px solid transparent',
    boxShadow: 'none'
  }
}))

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: UMSwatch.Black[100],
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  }
})

export function CheckboxSx(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' }
      }}
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Trust this device' }}
      {...props}
    />
  )
}
