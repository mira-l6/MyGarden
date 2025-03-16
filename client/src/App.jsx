import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route } from 'react-router';

// import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/About';
import Login from './pages/Login';

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
