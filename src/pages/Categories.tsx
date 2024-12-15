import { Container, Row, Col, Card } from 'react-bootstrap';

export const Categories = () => {
  const categories = [
    'Fantasy', 'Science Fiction', 'Romance', 'Mystery',
    'Horror', 'Historical Fiction', 'Literary Fiction', 'Thriller'
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Browse Categories</h2>
        </Col>
      </Row>
      <Row>
        {categories.map((category, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                  Explore our collection of {category.toLowerCase()} novels
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
