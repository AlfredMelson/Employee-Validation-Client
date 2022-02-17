import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { IEmployee } from '../../services/getEmployees'
import EmailForm from './EmailForm'

interface IEmployeeEntry {
  employees: Array<IEmployee>
}

export default function EmployeeEntry({ employees }: IEmployeeEntry) {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

  return (
    <List sx={{ width: '100%', p: 0 }}>
      {employees.map(empl => (
        <>
          <ListItemButton
            key={empl.id}
            selected={selectedIndex === parseInt(empl.id)}
            onClick={event => handleListItemClick(event, 0)}>
            <ListItemAvatar>
              <Avatar>{empl.name.substring(0, 2)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={empl.name} secondary={empl.email} />
            {/* <UpdateModal emplId={empl.id} emplName={empl.name} emplRole={empl.role} /> */}
            <EmailForm emplId={empl.id} emplName={empl.name} emplRole={empl.role} />
          </ListItemButton>
          <Divider component='li' />
        </>
      ))}
    </List>
  )
}
