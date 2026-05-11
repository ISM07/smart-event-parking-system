import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigationBar from './components/Navbar'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import EventPage from './pages/EventPage'

function App() {
  return (
    <BrowserRouter>

      {/* ✅ Navbar هنا يظهر في كل الصفحات */}
      <NavigationBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
       <Route path='/register' element={<RegisterPage />} />
        <Route path='/events' element={<EventPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App