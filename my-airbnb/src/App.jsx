import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import LoginUser from './pages/login'
import RegisterUser from './pages/register'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar'
import Cart from './pages/cart'
import AddProperty from './pages/addProperty'
import PropertyDetails from './pages/propertyDetails'
import Checkout from './pages/checkout'
import { useSelector } from 'react-redux'
import Footer from './components/footer'
function App() {
  const user = useSelector((state) => state.user)

  return (
    <div className='container-fluid'>
      {/* if user is logged in then only render the navbar */}
      {user.loginStatus && <Navbar />}

      <div className='container'>
        <Routes>
          <Route path='/' element={<LoginUser />} />
          <Route path='/login' element={<LoginUser />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/add-property' element={<AddProperty />} />
          <Route
            path='/property-details/:propertyId'
            element={<PropertyDetails />}
          />
        </Routes>

        <ToastContainer />
      </div>
      {user.loginStatus && <Footer />}
    </div>
  )
}

export default App
