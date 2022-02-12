import { useState } from 'react'
import Modal from 'react-modal'
import { IItem } from '../../../services/getUserItems'
import updateItem from '../../../services/updateItem'
import ItemIcon from './ItemIcon'

interface IUpdateModal {
  item: IItem
}

function UpdateModal({ item }: IUpdateModal) {
  const [showModal, setShowModal] = useState(false)
  const [newEmail, setNewEmail] = useState('')

  return (
    <>
      <button className='update' onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className='modal'
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel='Example Modal'>
        <h1>Update Password</h1>
        <input
          placeholder='new password'
          className='input'
          value={newEmail}
          onChange={event => setNewEmail(event.target.value)}
        />
        <div className='pt-12px text-center'>
          <button
            className='button'
            onClick={async () => {
              await updateItem({
                ...item,
                email: newEmail
              })

              window.location.reload()
            }}>
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
  items: Array<IItem>
}

export default function List({ items }: IList) {
  return (
    <ul className='list'>
      {items.map(item => (
        <li className='item' key={item.name}>
          <ItemIcon name={item.name} />
          <div>
            <div className='title'>{item.name}</div>
            <div className='description'>{item.email}</div>
          </div>
          <UpdateModal item={item} />
        </li>
      ))}
    </ul>
  )
}
