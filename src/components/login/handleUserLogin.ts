import { API } from '../../constants'
import getUrl from '../../utils/getUrl'

const handleUserLogin = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password
  })

  const response = await fetch(url)
  const data = await response.json()
  const { token } = data

  localStorage.setItem('token', token)
}

export default handleUserLogin
