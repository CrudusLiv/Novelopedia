
import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const { id } = useParams()
  
  return (
    <Container>
      <Typography variant="h4">Book Details - {id}</Typography>
    </Container>
  )
}

export default BookDetails
