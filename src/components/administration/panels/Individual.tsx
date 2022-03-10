import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { UMSwatch } from '../../../style'
import { DeleteEmployeeDialog, UpdateEmployeeDialog } from '../dialogs'

interface IIndividual {
  id: string
  firstname: string
  lastname: string
  role: string
  email: string
}

function Individual({ id, firstname, lastname, role, email }: IIndividual) {
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: UMSwatch.Gold[50],
            borderRadius: '4px',
            color: UMSwatch.Black[100],
            fontWeight: 500
          }}>
          {firstname.substring(0, 1)}
          {lastname.substring(0, 1)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={[firstname, lastname].join(' ')}
        secondary={email}
        sx={{
          '.MuiListItemText-primary': { fontSize: '20px', color: UMSwatch.White[100] },
          '.MuiListItemText-secondary': { color: UMSwatch.White[50] }
        }}
      />
      <UpdateEmployeeDialog
        emplId={id}
        emplFirstname={firstname}
        emplLastname={lastname}
        emplRole={role}
        emplEmail={email}
      />
      <DeleteEmployeeDialog emplId={id} emplFirstname={firstname} emplLastname={lastname} />
    </ListItem>
  )
}
export default Individual
