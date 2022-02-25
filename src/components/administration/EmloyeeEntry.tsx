import { ListItem, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { motion } from 'framer-motion'
import { Empl } from '../../api/empl'
import { UMSwatch } from '../../style'
import DeleteRegistrant from './DeleteRegistrant'
import UpdateRegistrant from './UpdateRegistrant'

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
            <Stack direction='row' justifyContent='center' alignItems='center'>
              <ListItem divider>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: UMSwatch.Gold[50],
                      borderRadius: '4px',
                      color: UMSwatch.Black[100],
                      fontWeight: 500
                    }}>
                    {empl.name.substring(0, 2)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={empl.name}
                  secondary={empl.email}
                  sx={{
                    '.MuiListItemText-primary': { fontSize: '20px', color: UMSwatch.White[100] },
                    '.MuiListItemText-secondary': { color: UMSwatch.White[50] }
                  }}
                />

                <UpdateRegistrant
                  emplId={empl.id}
                  emplName={empl.name}
                  emplRole={empl.role}
                  emplEmail={empl.email}
                />
                <DeleteRegistrant
                  emplId={empl.id}
                  emplName={empl.name}
                  emplRole={empl.role}
                  emplEmail={empl.email}
                />
              </ListItem>
            </Stack>
          </motion.li>
        ))}
      </motion.ul>
    </List>
  )
}
