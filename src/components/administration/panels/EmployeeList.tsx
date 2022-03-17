import List from '@mui/material/List'
import { AnimatePresence, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { paginatedEmplListAtom } from '../../../recoil-state'
import Individual from './Individual'

export default function EmployeeList() {
  const paginatedEmplList = useRecoilValue(paginatedEmplListAtom)

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5
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
    <AnimatePresence exitBeforeEnter>
      <List sx={{ p: 0, backgroundColor: 'transparent' }}>
        <motion.ul
          layout
          variants={container}
          initial='initial'
          animate='animate'
          exit='exit'
          style={{ listStyle: 'none', paddingInlineStart: 0 }}>
          {paginatedEmplList.map((empl) => (
            <motion.div
              key={empl.id}
              className='list-group-empl'
              layout
              variants={employee}
              initial='initial'
              animate='animate'
              exit='exit'>
              <Individual
                emplId={empl.id}
                emplFirstname={empl.firstname}
                emplLastname={empl.lastname}
                emplRole={empl.role}
                emplEmail={empl.email}
              />
            </motion.div>
          ))}
        </motion.ul>
      </List>
    </AnimatePresence>
  )
}
