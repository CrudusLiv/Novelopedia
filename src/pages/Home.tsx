
import { Container, Typography, Box } from '@mui/material'

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 2, mb: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Discover Stories
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Suggested for You
          </Typography>
          <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
            {/* Add suggestion cards here */}
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Popular Novels
          </Typography>
          <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
            {/* Add novel cards here */}
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Encyclopedia Topics
          </Typography>
          <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
            {/* Add encyclopedia cards here */}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home