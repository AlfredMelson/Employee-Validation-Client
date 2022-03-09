import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useEmployeesContext } from '../../context'
import { CardSx } from '../mui'
import { Collocation, Pagination } from './controls'
import { HeaderSection } from './header'
import { TabSelectors } from './tabs'
import { Tagline } from './tagline'

export default function Dashboard() {
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

  const paginate = {
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
          <HeaderSection />
        </motion.div>
        <motion.div variants={inputs}>
          <Tagline />
        </motion.div>
        <TabSelectors />
        <motion.div variants={paginate}>
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            sx={{ padding: '0 0 14px' }}>
            <Collocation />
            <Pagination />
          </Stack>
        </motion.div>
      </CardSx>
    </motion.div>
  )
}
