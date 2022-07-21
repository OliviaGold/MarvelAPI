import { Container } from 'react-bootstrap';
import Nav from "./Nav";
import logo from '../img/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <Container fluid='true' className='wrapper'>
        <img src={logo} alt='logo' className='logo'/>
        <div className="nav">
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header;