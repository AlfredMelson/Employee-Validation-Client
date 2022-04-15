import { createContext, ReactNode, useState } from 'react'

// export interface IAuth {
//   adminUsername?: string
//   adminPassword?: string
//   adminAccessToken?: string
// }

// export interface Admin {
//   auth: IAuth
//   setAuth: Dispatch<SetStateAction<IAuth>>
// }

// const AuthContext = createContext<Admin>({
//   auth: {},
//   setAuth: () => {}
// })

// export const useUsersContext = () => useContext(AuthContext)

const AuthContext = createContext<Record<string, any>>({})

interface IAuthProvider {
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [auth, setAuth] = useState({
    username: '',
    password: '',
    accessToken: ''
  })

  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false)

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
