import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { AnimatePresence, motion } from 'framer-motion'
import _ from 'lodash'
import { useState } from 'react'
import { Empl } from '../../api/empl'
import UpdateEmailDialog from './UpdateEmailDialog'

interface IEmployeeEntry {
  employees: Empl[]
}

export default function EmployeeEntry({ employees }: IEmployeeEntry) {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

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
    <AnimatePresence exitBeforeEnter>
      <List sx={{ width: '100%', p: 0, backgroundColor: 'transparent' }}>
        <motion.ul
          variants={container}
          initial='hidden'
          animate='visible'
          style={{ listStyle: 'none', paddingInlineStart: 0 }}>
          {employees.map(empl => (
            <motion.li key={empl.id} variants={item} className='list-group-empl'>
              <ListItemButton
                key={empl.id}
                divider
                selected={selectedIndex === parseInt(empl.id)}
                onClick={event => handleListItemClick(event, 0)}>
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
              </ListItemButton>
            </motion.li>
          ))}
        </motion.ul>
      </List>
    </AnimatePresence>
  )
}
