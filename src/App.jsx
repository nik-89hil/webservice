
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Tools from './pages/Tools'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

function App() {


  return (
    <>
  
    <BrowserRouter>
    <Routes >
      <Route exact path='/'  element={<Home/>}/>
      <Route exact path='/about'  element={<About/>}/>
      <Route exact path='/service'  element={<Tools/>}/>
      <Route exact path='/service/tools-technology' element={<Tools/>}/>
      <Route exact path='/service/products' element={<Product/>}/>
      <Route exact path='/contact'  element={<Contact/>}/>
      <Route exact path='/admin'  element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default App
