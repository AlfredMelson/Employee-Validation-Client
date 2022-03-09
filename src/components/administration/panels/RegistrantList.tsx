import { ListItem, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { paginatedEmplListAtom } from '../../../recoil-state'
import { UMSwatch } from '../../../style'
import { RegistrantDeletion, RegistrantUpdate } from '../dialogs'

export default function RegistrantList() {
  const paginatedEmplList = useRecoilValue(paginatedEmplListAtom)

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const employee = {
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
        exit={{ opacity: 0 }}
        style={{ listStyle: 'none', paddingInlineStart: 0 }}>
        {paginatedEmplList.map((empl) => (
          <motion.div key={empl.id} variants={employee} className='list-group-empl'>
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
                    {empl.firstname.substring(0, 1)}
                    {empl.lastname.substring(0, 1)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={[empl.firstname, empl.lastname].join(' ')}
                  secondary={empl.email}
                  sx={{
                    '.MuiListItemText-primary': { fontSize: '20px', color: UMSwatch.White[100] },
                    '.MuiListItemText-secondary': { color: UMSwatch.White[50] }
                  }}
                />

                <RegistrantUpdate
                  emplId={empl.id}
                  emplFirstname={empl.firstname}
                  emplLastname={empl.lastname}
                  emplRole={empl.role}
                  emplEmail={empl.email}
                />
                <RegistrantDeletion
                  emplId={empl.id}
                  emplFirstname={empl.firstname}
                  emplLastname={empl.lastname}
                />
              </ListItem>
            </Stack>
          </motion.div>
        ))}
      </motion.ul>
    </List>
  )
}
