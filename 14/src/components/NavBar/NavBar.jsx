import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

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
            <li>Home</li>
            <li>Program</li>
            <li>About US</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>Contact US</li>
        </ul>
    </nav>
  )
}

export default NavBar
