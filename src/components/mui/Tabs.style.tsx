import { styled } from '@mui/material/styles'
import Tabs, { TabsProps } from '@mui/material/Tabs'

export const TabsSx = styled((props: TabsProps) => (
  <Tabs
    aria-label='selector tabs skeleton'
    variant='scrollable'
    scrollButtons='auto'
    classes={{ indicator: 'indicator' }}
    {...props}
  />
))(() => ({
  gridColumn: 2,
  pb: '4px'
}))
