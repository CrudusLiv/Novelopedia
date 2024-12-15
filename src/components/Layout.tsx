import { Container, Row, Col, Table, Card as BootstrapCard, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Layout = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar expand="lg" style={{ backgroundColor: '#720e9e' }} variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Novelopedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#library">Library</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sci-Fi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="px-0">
        {/* Hero Container */}
        <div className="bg-gradient text-white py-5" style={{ backgroundColor: '#720e9e' }}>
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h1>Discover Your Next Adventure</h1>
                <p className="lead">Explore thousands of novels across multiple genres</p>
              </Col>
              <Col md={6}>
                <img src="https://picsum.photos/500/300" alt="Hero" className="img-fluid rounded" />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Main Content Container */}
        <Container className="my-5">
          <Row>
            {/* Sidebar */}
            <Col md={3}>
              <BootstrapCard className="mb-4">
                <BootstrapCard.Header className="fw-bold">Quick Links</BootstrapCard.Header>
                <BootstrapCard.Body>
                  <Nav className="flex-column">
                    <Nav.Link href="#trending">Trending Now</Nav.Link>
                    <Nav.Link href="#new">New Releases</Nav.Link>
                    <Nav.Link href="#popular">Most Popular</Nav.Link>
                    <Nav.Link href="#awards">Award Winners</Nav.Link>
                  </Nav>
                </BootstrapCard.Body>
              </BootstrapCard>

              {/* Featured Authors Container */}
              <BootstrapCard>
                <BootstrapCard.Header className="fw-bold">Featured Authors</BootstrapCard.Header>
                <BootstrapCard.Body>
                  <div className="d-flex flex-column gap-2">
                    {['Author 1', 'Author 2', 'Author 3'].map((author, index) => (
                      <div key={index} className="d-flex align-items-center gap-2">
                        <img src={`https://picsum.photos/50/50?random=${index}`} 
                             className="rounded-circle" 
                             alt={author} />
                        <span>{author}</span>
                      </div>
                    ))}
                  </div>
                </BootstrapCard.Body>
              </BootstrapCard>
            </Col>

            {/* Main Content */}
            <Col md={9}>
              {/* Featured Books Container */}
              <h2 className="mb-4">Featured Books</h2>
              <Row className="g-4 mb-5">
                {[1, 2, 3, 4].map((item) => (
                  <Col md={3} key={item}>
                    <BootstrapCard className="h-100">
                      <BootstrapCard.Img variant="top" src={`https://picsum.photos/200/300?random=${item}`} />
                      <BootstrapCard.Body>
                        <BootstrapCard.Title>Book Title {item}</BootstrapCard.Title>
                        <BootstrapCard.Text>
                          Author Name
                        </BootstrapCard.Text>
                      </BootstrapCard.Body>
                      <BootstrapCard.Footer>
                        <small className="text-muted">Rating: 4.5/5</small>
                      </BootstrapCard.Footer>
                    </BootstrapCard>
                  </Col>
                ))}
              </Row>

              {/* Latest Releases Container */}
              <h2 className="mb-4">Latest Releases</h2>
              <Table responsive hover className="mb-5">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((item) => (
                    <tr key={item}>
                      <td>Book Title {item}</td>
                      <td>Author Name</td>
                      <td>Fantasy</td>
                      <td>2023-{item}-01</td>
                      <td>4.{item}/5</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        {/* Stats Container */}
        <div className="bg-light py-5">
          <Container>
            <Row className="text-center">
              <Col md={3}>
                <h2 className="display-4">1000+</h2>
                <p className="lead">Books</p>
              </Col>
              <Col md={3}>
                <h2 className="display-4">500+</h2>
                <p className="lead">Authors</p>
              </Col>
              <Col md={3}>
                <h2 className="display-4">50+</h2>
                <p className="lead">Genres</p>
              </Col>
              <Col md={3}>
                <h2 className="display-4">10k+</h2>
                <p className="lead">Readers</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Layout;