import { useState } from 'react'
import { AuthContext } from './context'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('interguide-user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (email, password) => {
    if (email === 'admin@interguide.com' && password === '123456') {
      const userData = { email: email, name: 'Administrador' }

      setUser(userData)
      localStorage.setItem('interguide-user', JSON.stringify(userData))

      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('interguide-user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}