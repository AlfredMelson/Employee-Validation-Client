import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import { useRef, useState } from 'react'
import Modal from 'react-modal'
import useUpdateEmployee from '../../../hooks/useUpdateEmployee'
import { IEmployee } from '../../../services/getEmployees'
import ItemIcon from './ItemIcon'

interface IUpdateModal {
  emplId: string
  emplName: string
  emplRole: string
}

function UpdateModal({ emplId, emplName, emplRole }: IUpdateModal) {
  const [showModal, setShowModal] = useState(false)
  const [newEmail, setNewEmail] = useState('')

  const callUpdate = useUpdateEmployee({ emplId, emplName, emplRole, emplEmail: newEmail })

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  const handleEmplUpdate = async event => {
    event.preventDefault()

    try {
      callUpdate()

      window.location.reload()

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)

      // handle no response from the server
      if (!error?.response) {
        setErrorMessage('No Server Response')

        // handle invalid syntax
      } else if (error.response?.status === 400) {
        setErrorMessage('Missing Username or Password')

        // handle invalid syntax
      } else if (error.response?.status === 401) {
        setErrorMessage('Unauthorized Creditentials')

        // catch-all-other-errors
      } else {
        setErrorMessage('Login Failed')
      }
      errorReference.current.focus()
    }
  }

  return (
    <>
      <Collapse in={errorAlert}>
        <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
          {errorMessage}
        </Alert>
      </Collapse>
      <button className='update' onClick={() => setShowModal(true)}>
        Update Email
      </button>
      <Modal
        className='modal'
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel='Example Modal'>
        <h1>Update Email</h1>
        <input
          placeholder='new password'
          className='input'
          value={newEmail}
          onChange={event => setNewEmail(event.target.value)}
        />
        <div className='pt-12px text-center'>
          <button className='button' onClick={handleEmplUpdate}>
            Change
          </button>
          <button
            className='button ml-12px'
            onClick={() => {
              setShowModal(false)
            }}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  )
}

interface IList {
  employees: Array<IEmployee>
}

export default function List({ employees }: IList) {
  return (
    <ul className='list'>
      {employees.map(empl => (
        <li className='item' key={empl.name}>
          <ItemIcon name={empl.name} />
          <div>
            <div className='title'>{empl.name}</div>
            <div className='description'>{empl.email}</div>
          </div>
          <UpdateModal emplId={empl.id} emplName={empl.name} emplRole={empl.role} />
        </li>
      ))}
    </ul>
  )
}
