import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme, IconButton } from '@mui/material'
import { useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import BottomNavigation from './components/layout/BottomNavigation'
import Home from './pages/Home'
import Library from './pages/Library'
import Profile from './pages/Profile'
import BookDetails from './pages/BookDetails'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app-container">
          <IconButton 
            sx={{ position: 'absolute', top: 16, right: 16 }}
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App