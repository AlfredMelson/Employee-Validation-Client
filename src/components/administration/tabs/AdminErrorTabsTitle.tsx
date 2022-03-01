import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import { UMSwatch } from '../../../style'

const ErrorTabsTitleContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: '36px 1fr 3fr 30px',
    alignItems: 'center'
  }
}))

export default function AdminErrorTabsTitle() {
  return (
    <ErrorTabsTitleContainer>
      <Divider sx={{ gridColumn: 3, color: UMSwatch.Grey[500], pb: '12px' }}>
        <Box sx={{ mx: '8px' }}>registration errors</Box>
      </Divider>
    </ErrorTabsTitleContainer>
  )
}
