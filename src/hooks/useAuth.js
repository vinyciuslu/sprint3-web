import { useContext } from 'react'
import { AuthContext } from '../contexts/context'

const useAuth = () => useContext(AuthContext)

export default useAuth