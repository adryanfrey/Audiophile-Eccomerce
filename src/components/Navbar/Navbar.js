// sass
import './navbar.sass'

// hooks
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// assets
import img5 from '../../assets/home/desktop/image-removebg-preview(38).png'
import earphonesNav from '../../assets/earphonesNav.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import chevron from '../../assets/home/desktop/chevron.png'

// components
import Cart from '../Cart/Cart'

// store
import store from '../../store'
import { useSnapshot } from 'valtio'

const Navbar = () => {
  // states
  const [navMobile, setNavMobile] = useState(false)
  const [cartDisplay, setCartDisplay] = useState(false)
  const snap = useSnapshot(store)

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


  // handle cart icon on click
  const handleCartClick = () => {
    window.scrollTo(0, 0)
    displayCart()
  }


  // handle cart view
  const displayCart = () => {
    if (cartDisplay === false) {
      setCartDisplay(true)
    } else {
      setCartDisplay(false)
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
              <img src={earphonesNav} alt="" />
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

      {cartDisplay &&
        <Cart closeCart={() => setCartDisplay(false)} />
      }

      {snap.items.length > 0 &&
        <div className='cart-button' onClick={() => handleCartClick()}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      }

    </header>
  )
}

export default Navbar