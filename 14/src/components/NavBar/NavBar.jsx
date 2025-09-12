import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {

  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

  }, []);

  return (
    <nav className={`container ${sticky ? 'nav-sticky' : ''}`}>
        <img src={logo} alt="Logo" />
        <ul>
            <li><Link to="Hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="Programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to="about" smooth={true} offset={-80} duration={500}>About US</Link></li>
            <li><Link to="Campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li className='li-btn'><Link to="Contact" smooth={true} offset={-260} duration={500}>Contact US</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
