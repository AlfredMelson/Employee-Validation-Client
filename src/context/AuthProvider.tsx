import { createContext, ReactNode, useState } from 'react'

const AuthContext = createContext<Record<string, any>>({})

interface IAuthProvider {
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [auth, setAuth] = useState({})
  const [adminAccessToken, setAdminAccessToken] = useState(null)

  return (
    <AuthContext.Provider value={{ auth, setAuth, adminAccessToken, setAdminAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
