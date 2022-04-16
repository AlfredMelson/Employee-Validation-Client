import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const TabWrapper = styled(Box, { name: 'Tab', slot: 'wrapper' })(() => ({
  display: 'grid',
  gridTemplateColumns: '10px 1fr 10px',
  alignItems: 'center',
  justifyItems: 'center'
}))

export const TabPanelWrapper = styled(
  (props: BoxProps) => <Box sx={{ bgcolor: 'transparent', m: '20px' }} {...props} />,
  {
    name: 'TabPanel',
    slot: 'wrapper'
  }
)(() => ({
  borderRadius: '4px'
}))
