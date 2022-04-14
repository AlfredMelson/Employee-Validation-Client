import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { UMSwatch } from '../../../style'
import { DeleteEmployeeDialog, UpdateEmployeeDialog } from '../dialogs'

interface IIndividual {
  emplId: string
  emplFirstname: string
  emplLastname: string
  emplRole: string
  emplEmail: string
}

export default function Individual({
  emplId,
  emplFirstname,
  emplLastname,
  emplRole,
  emplEmail
}: IIndividual) {
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
          {emplFirstname.substring(0, 1)}
          {emplLastname.substring(0, 1)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={[emplFirstname, emplLastname].join(' ')}
        secondary={emplEmail}
        sx={{
          '.MuiListItemText-primary': { fontSize: '20px', color: UMSwatch.White[100] },
          '.MuiListItemText-secondary': { color: UMSwatch.White[50] }
        }}
      />
      <UpdateEmployeeDialog
        emplId={emplId}
        emplFirstname={emplFirstname}
        emplLastname={emplLastname}
        emplRole={emplRole}
        emplEmail={emplEmail}
      />
      <DeleteEmployeeDialog
        emplId={emplId}
        emplFirstname={emplFirstname}
        emplLastname={emplLastname}
      />
    </ListItem>
  )
}
