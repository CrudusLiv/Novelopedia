import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { novelTheme } from './theme/material'
import BottomNavigation from './components/layout/BottomNavigation'
import Home from './pages/Home'
import Library from './pages/Library'
import Profile from './pages/Profile'
import BookDetails from './pages/BookDetails'

function App() {
  return (
    <ThemeProvider theme={novelTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="app-container">
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