import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './pages/main'
import AboutUs from './pages/AboutUs.jsx'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Enter from './pages/Enter'
import Edit from './pages/Edit'
import Logout from './pages/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/enter' element={<Enter/>} />
      <Route path='/edit' element={<Edit/>} />
      <Route path='/logout' element={<Logout/>} />
    </Routes>
  )
}

export default App
