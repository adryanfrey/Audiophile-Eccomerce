// hooks
import { HashRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//sass
import './sassStyles/global.sass'
import './sassStyles/typography.sass'

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pages
import Home from './pages/Home/Home'
import Headphones from './pages/Headphones/Headphones';
import Speakers from './pages/Speakers/Speakers';
import Earphones from './pages/Earphones/Earphones';
import Checkout from './pages/checkout/Checkout';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <ToastContainer autoClose={2000} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/product/:id' element={<ProductPage />}/>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
