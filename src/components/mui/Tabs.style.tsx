import { styled } from '@mui/material/styles'
import Tabs, { TabsProps } from '@mui/material/Tabs'

export const TabsSx = styled((props: TabsProps) => (
  <Tabs aria-label='selector tabs' variant='scrollable' scrollButtons='auto' {...props} />
))(() => ({
  gridColumn: 2,
  pb: '4px'
}))
