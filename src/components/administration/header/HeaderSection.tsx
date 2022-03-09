import Stack from '@mui/material/Stack'
import { AddEmployeeDialog } from '../dialogs'
import AdminLogout from './AdminLogout'
import LogoAppName from './LogoAppName'

export default function Header() {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ p: '20px 20px 10px' }}>
      <LogoAppName />
      <Stack direction='row' justifyContent='space-around' alignItems='center'>
        <AddEmployeeDialog />
        <AdminLogout />
      </Stack>
    </Stack>
  )
}
