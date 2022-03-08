import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import { UMSwatch } from '../../style'

export const CircularProgressSx = styled(
  (props: CircularProgressProps) => <CircularProgress size={20} {...props} />,
  {
    name: 'CircularProgress',
    slot: 'style'
  }
)(() => ({
  color: UMSwatch.Gold[50],
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-10px',
  marginLeft: '-9px'
}))
