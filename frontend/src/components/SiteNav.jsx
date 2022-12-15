import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {

    return(
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="navbar-auto">
            <Nav.Link href="#">All Games</Nav.Link>
            <Nav.Link href="#">Games by Console</Nav.Link>
            <Nav.Link href="#">Games by Genre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default SiteNav;