
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, LibraryBooks, Person } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BottomNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = useState(0)

  useEffect(() => {
    const pathToIndex: { [key: string]: number } = {
      '/': 0,
      '/library': 1,
      '/profile': 2,
    }
    setValue(pathToIndex[location.pathname] || 0)
  }, [location])

  return (
    <MuiBottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue)
        const routes = ['/', '/library', '/profile']
        navigate(routes[newValue])
      }}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Library" icon={<LibraryBooks />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </MuiBottomNavigation>
  )
}

export default BottomNavigation
