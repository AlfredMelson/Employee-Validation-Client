import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const AdminCard = () => {
  const [admins, setAdmins] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let isMounted = true

    // replaces axios cancel tokens
    const controller = new AbortController()

    const getAdministrators = async () => {
      try {
        const response = await axiosPrivate.get('/admin/ids', {
          signal: controller.signal
        })
        console.log(response.data)

        // check if the component is mounted and set the response
        isMounted && setAdmins(response.data)
      } catch (err) {
        console.error(err)

        // push to login if unauthorized
        navigate('/', { state: { from: location }, replace: true })
      }
    }

    getAdministrators()

    return () => {
      isMounted = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <article>
      <h2>Administrators List</h2>
      {admins?.length ? (
        <ul>
          {admins.map((admin, i) => (
            <li key={i}>{admin?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  )
}

export default AdminCard
