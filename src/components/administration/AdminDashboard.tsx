import { Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useEmployeesContext } from '../../context'
import { CardSx } from '../mui'
import { DataCollocation, DataPagination } from './controls'
import { AdminHeader } from './header'
import { AdminTabSelectors } from './tabs'
import { AdminTagline } from './tagline'

export default function AdminDashboard() {
  const { getEmployees } = useEmployeesContext()

  useEffect(() => {
    getEmployees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const content = {
    animate: {
      transition: { staggerChildren: 0.5, delayChildren: 0.5 }
    }
  }

  const title = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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

  const pagination = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
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
        <AdminTabSelectors />
        <motion.div variants={pagination}>
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            sx={{ padding: '0 0 14px' }}>
            <DataCollocation />
            <DataPagination />
          </Stack>
        </motion.div>
      </CardSx>
    </motion.div>
  )
}
