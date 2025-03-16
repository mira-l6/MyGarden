import Header from './components/header/Header'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route } from 'react-router';

// import SubHeader from './components/SubHeader';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';

function App() {

  return (
    <>
      <Header />
      {/* <SubHeader /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />


    </>
  )
}

export default App;
