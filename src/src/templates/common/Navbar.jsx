import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { logout } from '../../stores/accounts/actions/AuthActions';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import pic from '../accounts/assets1/dummy logo.png';
import {useNavigate} from 'react-router-dom';
import '../common/Navbar.css';

const NavigationBar = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const userEmail = useSelector((state) => state.auth?.user?.email)
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)

  const handleClick = () => {
    dispatch({type:'LOGOUT'})
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <div className="logo"><img src={pic} alt="Dummy Logo"/></div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
              <a onClick={()=>{navigate("/")}} className="nav-link">Home</a>
              <span className="nav-item-spacer"></span>
              <a onClick={()=>{navigate("/doctor")}} className="nav-link">Doctor</a>
              <span className="nav-item-spacer"></span>
              <a onClick={()=>{navigate("/journal")}} className="nav-link">Journal</a>
              <span className="nav-item-spacer"></span>
              <a onClick={()=>{navigate("/payment")}} className="nav-link">Payment</a>
              <span className="nav-item-spacer"></span>
              <a onClick={()=>{navigate("/survey")}} className="nav-link">Survey</a>
              <span className="nav-item-spacer"></span>
              <a onClick={()=>{navigate("/chatbott")}} className="nav-link">Chatbot</a>
            </Nav>
            <Nav>
              {
                isAuthenticated ? <>
                  <Nav.Link href="/" className="nav-link">{userEmail}</Nav.Link>
                  <Button type="submit" onClick={handleClick}>Logout</Button>
                </> : <>
                  <a onClick={()=>{navigate("/login")}} className="nav-link">Login</a>
                  <span className="nav-item-spacer"></span>
                  <a onClick={()=>{navigate("/signup")}} className="nav-link">Signup</a>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
