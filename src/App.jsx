
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Service from './pages/Service'
import Tools from './pages/Tools'
import Product from './pages/Product'
import Contact from './pages/Contact'

function App() {


  return (
    <>
  
    <BrowserRouter>
    <Routes >
      <Route exact path='/'  element={<Home/>}/>
      <Route exact path='/about'> <About/></Route>
      <Route exact path='/service'  element={<Service/>}/>
      <Route exact path='/service/tools-technology' element={<Tools/>}/>
      <Route exact path='/service/products' element={<Product/>}/>
      <Route exact path='/contact'  element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default App
