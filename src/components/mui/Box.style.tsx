import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const TabsWrapper = styled(Box, { name: 'Tab', slot: 'wrapper' })(() => ({
  display: 'grid',
  gridTemplateColumns: '20px 1fr 20px',
  alignItems: 'center',
  justifyItems: 'center'
}))

export const PanelWrapper = styled(
  (props: BoxProps) => <Box sx={{ bgcolor: 'transparent', m: '20px' }} {...props} />,
  {
    name: 'Panel',
    slot: 'wrapper'
  }
)(() => ({
  borderRadius: '4px'
}))
