import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { motion } from 'framer-motion'
import _ from 'lodash'
import { Empl } from '../../api/empl'
import DeleteContactDialog from './DeleteContactDialog'
import UpdateEmailDialog from './UpdateEmailDialog'

interface IEmployeeEntry {
  employees: Empl[]
}

export default function EmployeeEntry({ employees }: IEmployeeEntry) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <List sx={{ width: '100%', p: 0, backgroundColor: 'transparent' }}>
      <motion.ul
        variants={container}
        initial='hidden'
        animate='visible'
        style={{ listStyle: 'none', paddingInlineStart: 0 }}>
        {employees.map(empl => (
          <motion.li key={empl.id} variants={item} className='list-group-empl'>
            <ListItem key={empl.id} divider>
              <ListItemAvatar>
                <Avatar>{empl.name.substring(0, 2)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={empl.name} secondary={empl.email} />
              <UpdateEmailDialog
                emplId={empl.id}
                emplName={empl.name}
                emplRole={empl.role}
                emplEmail={empl.email}
              />
              <DeleteContactDialog
                emplId={empl.id}
                emplName={empl.name}
                emplRole={empl.role}
                emplEmail={empl.email}
              />
            </ListItem>
          </motion.li>
        ))}
      </motion.ul>
    </List>
  )
}
