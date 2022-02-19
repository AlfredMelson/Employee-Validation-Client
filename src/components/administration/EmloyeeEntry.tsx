import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { motion } from 'framer-motion'
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
        <motion.li key={empl.id} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ListItemButton
            divider
            selected={selectedIndex === parseInt(empl.id)}
            onClick={event => handleListItemClick(event, 0)}>
            <ListItemAvatar>
              <Avatar>{empl.name.substring(0, 2)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={empl.name} secondary={empl.email} />
            <EmailForm emplId={empl.id} emplName={empl.name} emplRole={empl.role} />
          </ListItemButton>
        </motion.li>
      ))}
    </List>
  )
}
