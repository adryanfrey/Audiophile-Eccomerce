// sass
import './navbar.sass'

// hooks
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// assets
import img5 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img6 from '../../assets/home/desktop/earphones.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import chevron from '../../assets/home/desktop/chevron.png'

// hooks
import { useState, useEffect } from 'react'


const Navbar = ({ displayCart }) => {
  // states
  const [navMobile, setNavMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const navigate = useNavigate('')

  // navigation
  const handleNavigation = (page) => {
    setNavMobile(false)
    navigate(page)
    window.scrollTo(0, 0)
  }

  // handle the mobile navbar view
  const handleMobileNavbar = () => {
    if (navMobile) {
      setNavMobile(false)
    } else {
      setNavMobile(true)
    }
  }

  return (
    <header className='header'>
      <div className='header-container'>

        <div className="logo-container">
          <i onClick={handleMobileNavbar} className="fa-solid fa-bars burguer"></i>
          <h4>audiophile</h4>
        </div>
        <div className='navbar-container'>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='headphones'>Headphones</Link></li>
              <li><Link to='speakers'>Speakers</Link></li>
              <li><Link to='earphones'>Earphones</Link></li>
            </ul>
          </nav>
        </div>
        <div onClick={displayCart} className='icon-container'>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      {navMobile &&
        <>
          <div className='navbar-tablet'>
            <div onClick={() => handleNavigation('headphones')} className='card1-container'>
              <img src={img7} alt="" />
              <div className='box-shadow'></div>
              <h6>headphones</h6>
              <button className='btn-3' >SHOP <img src={chevron} alt="chevron" /></button>
            </div>

            <div onClick={() => handleNavigation('speakers')} className='card1-container'>
              <img src={img5} alt="" />
              <div className='box-shadow'></div>
              <h6>speakers</h6>
              <button className='btn-3'>SHOP <img src={chevron} alt="chevron" />  </button>
            </div>

            <div onClick={() => handleNavigation('earphones')} className='card1-container'>
              <img src={img6} alt="" />
              <div className='box-shadow'></div>
              <h6>earphones</h6>
              <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
            </div>

            <div onClick={() => setNavMobile(false)} className='back-navbar'>
              Back
            </div>
          </div>

          <div className='filter-navbar'></div>
        </>
      }


    </header>
  )
}

export default Navbar