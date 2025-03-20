import Header from './components/header/Header'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes, Route } from 'react-router';

import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Catalog from './components/catalog/Catalog';
import PlantDetails from './components/plant-details/PlantDetails';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/catalog/details/:plantId' element={<PlantDetails />} />
        <Route path='/login' element={<Login />}/>
      </Routes>

      <Footer />


    </>
  )
}

export default App;
