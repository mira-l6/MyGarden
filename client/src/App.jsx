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
import MessageProvider from './providers/MessageProvider';

import PlantCreate from './components/plant-create/PlantCreate';
import PlantEdit from './components/plant-edit/PlantEdit';
import PlantGarden from './components/plant-garden/PlantGarden';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';
import Logout from './components/logout/Logout';
import Message from './components/message/Message';

function App() {

  return (
    <MessageProvider>
      <UserProvider>
        <Header />

        <Message />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/plants' element={<Catalog />} />
          <Route path='/plants/details/:plantId' element={<PlantDetails />} />
          <Route element={<AuthGuard />}>
            <Route path='/plants/create' element={<PlantCreate />} />
            <Route path='/plants/edit/:plantId' element={<PlantEdit />} />
            <Route path='/plants/garden' element={<PlantGarden />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route element={<GuestGuard />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>

        <Footer />

      </UserProvider>
    </MessageProvider>
  )
}


export default App;
