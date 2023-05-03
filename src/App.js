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
import Xx99mark2 from './pages/xx99mark2/Xx99mark2';
import Xx99mark1 from './pages/xx99mark1/Xx99mark1';
import Xx59 from './pages/xx59/Xx59';
import Zx9 from './pages/zx9/Zx9';
import Zx7 from './pages/zx7/Zx7';
import Yx1 from './pages/yx1/Yx1';
import Checkout from './pages/checkout/Checkout';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <ToastContainer autoClose={2000} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='speakers' element={<Speakers />} />
          <Route path='earphones' element={<Earphones />} />
          <Route path='/headphones/id:jbgy342ewgh2' element={<Xx99mark2 />} />
          <Route path='/headphones/id:lkjnuwedsas1' element={<Xx99mark1 />} />
          <Route path='/headphones/id:oiwedhsnas34' element={<Xx59 />} />
          <Route path='/speakers/id:yubdwudasas3' element={<Zx9 />} />
          <Route path='/speakers/id:gusajhdascsa56' element={<Zx7 />} />
          <Route path='/earphones/id:alskdnase324a' element={<Yx1 />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
