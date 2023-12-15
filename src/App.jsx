
import './App.css'
import Header from './component/header'
import Home from './pages/Home'
import Footer from './component/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {


  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route exact path='/'  element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default App
