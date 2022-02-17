import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import { useEffect, useRef, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { IEmployee } from '../../services/getEmployees'
import MygomSwatch from '../../style/MygomSwatch'
import ErrorBlock from '../error-block'
import HeaderCard from './header/HeaderCard'
// import LoadingScreen from '../LoadingScreen'

export default function Dashboard() {
  const [employees, setEmployees] = useState<Array<IEmployee>>([])
  const axiosPrivate = useAxiosPrivate()

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true

    // replaces axios cancel tokens
    const controller = new AbortController()

    const getEmployees = async () => {
      try {
        const response = await axiosPrivate.get('/api/ids', {
          signal: controller.signal
        })

        // check if the component is mounted and set the response
        isMounted && setEmployees(response.data)
      } catch (err) {
        setErrorAlert(true)

        // handle no response from the server
        if (!err?.response) {
          setErrorMessage('No Server Response')

          // handle invalid syntax
        } else if (err.response?.status === 401) {
          setErrorMessage('Unauthorized')
        } else {
          // catch-all-other-errors
          setErrorMessage('Logout Failed')
        }
        errorReference.current.focus()
      }
    }
    getEmployees()

    return () => {
      isMounted = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (errorMessage) {
    return <ErrorBlock errorMessage={errorMessage} />
  }

  return (
    <div style={{ backgroundColor: MygomSwatch.Grey[100] }}>
      <Collapse in={errorAlert}>
        <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
          {errorMessage}
        </Alert>
      </Collapse>
      <HeaderCard employees={employees} />
    </div>
  )
}
