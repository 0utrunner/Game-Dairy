import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {

    return(
      <Navbar className='navbar'>
        <Container>
          <Nav>
            <Nav.Link href="#">All Games</Nav.Link>
            <Nav.Link href="#">Action</Nav.Link>
            <Nav.Link href="#">Beat 'em Up</Nav.Link>
            <Nav.Link href="#">Fighter</Nav.Link>
            <Nav.Link href="#">Platformer</Nav.Link>
            <Nav.Link href="#">Puzzle</Nav.Link>
            <Nav.Link href="#">Racing</Nav.Link>
            <Nav.Link href="#">RPG</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default SiteNav;