// import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {BsFillCartFill} from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
function NavbarBS() {
  const { cartQuantity,toggleCartState } = useShoppingCart()
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary bg-white shadow-sm mb-4">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>Shopping-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
          
          </Nav>
          <Nav>
            <Button 
                variant='outline-secondary' 
                style={{width:'60px',height:'60px'}} 
                className='border-0 position-relative text-center'
                onClick={()=>toggleCartState()}>

                <BsFillCartFill className='fs-2'/>
                {
                  cartQuantity > 0 && (
                    <span 
                    style={{width:'25px',height:'25px',right:'0px',top:'1px',transform:'translate(25%,-15%)'}}
                    className='d-flex align-items-center justify-content-center rounded-circle p-2 position-absolute border border-1 bg-danger text-white'>
                    <span>{cartQuantity}</span>
                </span>
                  )
                }
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBS;