import { Container, Row, Col, Table } from 'react-bootstrap';

export const Library = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Your Library</h2>
          <Table striped hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {/* Add your library items */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
