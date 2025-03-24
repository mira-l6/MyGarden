import Header from './components/header/Header'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes, Route } from 'react-router';

import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Catalog from './components/plant-catalog/Catalog';
import PlantDetails from './components/plant-details/PlantDetails';
import Register from './components/register/Register';

import UserProvider from './providers/UserProvider';

function App() {

  return (
    <UserProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/details/:plantId' element={<PlantDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />


    </UserProvider>
  )
}

export default App;
