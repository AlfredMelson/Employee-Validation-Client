import Stack from '@mui/material/Stack'
import AdminHeaderAddEmpl from './AdminHeaderAddEmpl'
import AdminHeaderLogo from './AdminHeaderLogo'
import AdminHeaderLogout from './AdminHeaderLogout'

export default function AdminHeader() {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ p: '20px 20px 10px' }}>
      <AdminHeaderLogo />
      <Stack direction='row' justifyContent='space-around' alignItems='center'>
        <AdminHeaderAddEmpl />
        <AdminHeaderLogout />
      </Stack>
    </Stack>
  )
}
