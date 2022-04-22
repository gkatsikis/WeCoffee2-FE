import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as beanService from './services/beanService'
import BeansList from './pages/BeansList/BeansList'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [beans, setBeans] = useState()
  const navigate = useNavigate()
  console.log(user)

  const addBean = async (beanData) => {
    const bean = await beanService.create(beanData)
    setBeans([...beans, bean])
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await beanService.getAll()
      setBeans(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
        path="/"
        element={<BeansList addBean={addBean} />} 
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />

      </Routes>
    </>
  )
}

export default App
