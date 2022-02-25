import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEmployeesContext } from '../../context'
import { useAuth, useLogout } from '../../hooks'
import { UMSwatch } from '../../style'
import { LogoutIcon, SecurityIcon } from '../icons'
import { ToolTipSx } from '../mui'
import { HeaderButtonSx } from '../mui/Button.style'
import { IconButtonSx } from '../mui/IconButton.style'
import SelectorTabs from './SelectorTabs'

export default function Dashboard() {
  const { accessToken } = useAuth()
  const { employees, getEmployees } = useEmployeesContext()
  const logoutAdmin = useLogout(accessToken)
  const navigate = useNavigate()

  useEffect(() => {
    getEmployees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAdminLogout = async (_event: any) => {
    console.log('logging out')
    await logoutAdmin
    navigate('/')

    console.log('logged out')
  }

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
      <Card
        raised
        sx={{
          bgcolor: UMSwatch.Grey[800],
          borderRadius: { xs: '0px', sm: '4px' },
          minWidth: { xs: '100%', sm: '600px' }
        }}>
        <motion.div variants={title}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ p: '20px 20px 10px' }}>
            <HeaderButtonSx
              disableElevation
              disableFocusRipple
              disableRipple
              startIcon={<SecurityIcon />}>
              <Typography
                variant='h6'
                sx={{
                  textTransform: 'none'
                }}>
                Email Validator
              </Typography>
            </HeaderButtonSx>
            <Stack direction='row' justifyContent='space-around' alignItems='center'>
              <ToolTipSx tooltipTitle={'Add Registrant'}>
                <IconButtonSx sx={{ mr: '10px' }}>
                  <PersonAddIcon />
                </IconButtonSx>
              </ToolTipSx>
              <ToolTipSx tooltipTitle={'Logout'}>
                <IconButtonSx onClick={handleAdminLogout} sx={{ mr: '4px' }}>
                  <LogoutIcon />
                </IconButtonSx>
              </ToolTipSx>
            </Stack>
          </Stack>
        </motion.div>
        <motion.div variants={inputs}>
          <Typography
            variant='body1'
            sx={{
              color: UMSwatch.Coral[400],
              p: '40px 30px 60px 30px',
              fontWeight: 500,
              textAlign: 'center',
              fontSize: '23px'
            }}>
            Protect your company from bad registrations.
          </Typography>
        </motion.div>
        <SelectorTabs employees={employees} />
      </Card>
    </motion.div>
  )
}
