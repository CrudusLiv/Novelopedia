import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { novelTheme } from './theme/material';
import { Layout } from './components/Layout';
import  Home  from './pages/Home';
import { Library } from './pages/Library';
import { Categories } from './pages/Categories';
import { Profile } from './pages/Profile';
import './theme/bootstrap-integration';

function App() {
  return (
    <ThemeProvider theme={novelTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="categories" element={<Categories />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App