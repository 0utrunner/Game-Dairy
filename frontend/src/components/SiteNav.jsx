import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {

    return(
      <Navbar className='navbar'>
        <Container>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#/all">All Games</Nav.Link>
            <Nav.Link href="/#/action">Action</Nav.Link>
            <Nav.Link href="/#/beatup">Beat 'em Up</Nav.Link>
            <Nav.Link href="/#/fighter">Fighter</Nav.Link>
            <Nav.Link href="/#/platformer">Platformer</Nav.Link>
            <Nav.Link href="/#/puzzle">Puzzle</Nav.Link>
            <Nav.Link href="/#/racing">Racing</Nav.Link>
            <Nav.Link href="/#/rpg">RPG</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default SiteNav;