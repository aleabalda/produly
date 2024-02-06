import { createContext, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import '../App.css'
import Sidebar from './Sidebar'

export const ThemeContext = createContext(null)

function Layout ({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className='app'>
        <div className='header'>
          <h1 className='title'>produly</h1>
          <button className='mode-button' onClick={toggleTheme}>
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </div>
        <div className='main'>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <main className='page-content'>{children}</main>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
