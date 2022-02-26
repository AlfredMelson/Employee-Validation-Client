import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useEmployeesContext } from '../../context'
import { CardSx } from '../mui'
import AdminHeader from './header'
import AdminSelectorTabs from './tabs'
import AdminTagline from './tagline'

export default function Dashboard() {
  const { employees, getEmployees } = useEmployeesContext()

  useEffect(() => {
    getEmployees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const content = {
    animate: {
      transition: { staggerChildren: 0.5 }
    }
  }

  const title = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const inputs = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div variants={content} animate='animate' initial='initial'>
      <CardSx>
        <motion.div variants={title}>
          <AdminHeader />
        </motion.div>
        <motion.div variants={inputs}>
          <AdminTagline />
        </motion.div>
        <AdminSelectorTabs employees={employees} />
      </CardSx>
    </motion.div>
  )
}
