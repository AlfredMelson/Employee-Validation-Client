import { createContext, ReactNode, useState } from 'react'

const AuthContext = createContext<Record<string, any>>({})

interface IAuthProvider {
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [auth, setAuth] = useState({})

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
