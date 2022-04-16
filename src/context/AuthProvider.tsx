import { createContext, ReactNode, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { pushAdminStateAtom } from '../recoil-state'

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

interface IAuth {
  username: string
  password: string
  accessToken: string
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const setPushAdminState = useSetRecoilState(pushAdminStateAtom)
  const [auth, setAuth] = useState<IAuth>({
    username: '',
    password: '',
    accessToken: ''
  })

  useEffect(() => {
    setPushAdminState(auth.accessToken)
  }, [auth, setPushAdminState])

  console.log('AuthProvider', auth)

  const [persist, setPersist] = useState<boolean>(
    JSON.parse(localStorage.getItem('persist')) || false
  )

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
