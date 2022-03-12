import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
import UMSwatch from '../../style/UMSwatch'

export const LoginButtonSx = styled((props: ButtonProps) => (
  <Button size='medium' variant='contained' type='submit' {...props} />
))(() => ({
  minWidth: '102px',
  color: alpha(UMSwatch.Gold[50], 0.8),
  backgroundColor: UMSwatch.Black[50],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Gold[50],
    backgroundColor: UMSwatch.Black[100]
  },
  '&.Mui-disabled': {
    color: UMSwatch.Grey[600],
    backgroundColor: UMSwatch.Black[100]
  }
}))

export const SubmissionButtonSx = styled(Button)(() => ({
  minHeight: '38px',
  minWidth: '90px',
  color: UMSwatch.Black[50],
  backgroundColor: UMSwatch.Gold[50],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Black[50],
    backgroundColor: UMSwatch.Gold[50]
  },
  '&.Mui-disabled': {
    backgroundColor: UMSwatch.Grey[500]
  }
}))

export const LogoNameGroupingSx = styled(Button, {
  name: 'LogoNameGrouping',
  slot: 'style'
})(() => ({
  cursor: 'default',
  textTransform: 'none',
  color: UMSwatch.Gold[50],
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.Gold[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))

export const CRUDHeaderGroupSx = styled(Button, {
  name: 'CRUDHeaderGroup',
  slot: 'style'
})(() => ({
  maxWidth: '530px',
  cursor: 'default',
  textTransform: 'none',
  color: UMSwatch.White[50],
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: UMSwatch.White[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))
