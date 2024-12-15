import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export const Profile = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Profile Information</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" style={{ backgroundColor: '#720e9e' }}>
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Reading Statistics</Card.Title>
              {/* Add reading stats and preferences */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile
