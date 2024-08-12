import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'; // Make sure to adjust the path if necessary

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <img src='' alt=''/>
          <Navbar.Brand href="#home" className="navbar-text">MBP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navbar-text">Pre Planning</Nav.Link>
            <Nav.Link href="#features" className="navbar-text">Planning</Nav.Link>
            <Nav.Link href="#pricing" className="navbar-text">Post Planning</Nav.Link>
            <Nav.Link href="#home" className="navbar-text">Pricing</Nav.Link>
            <Nav.Link href="#features" className="navbar-text">Industries</Nav.Link>
          </Nav>
        </Container>
        <p style={{color:"#5F9EA0"}}>Call Us: 9970887772</p>  
        <img src='./cart.png' alt=''/>
      </Navbar>
    </>
  );
}

export default Header;
