import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import './styles.css'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';


function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/pricing":
      component = <Pricing/>
      break
    case "/about":
      component = <About/>
      break

  }
  return (
    <>
    <NavBar/>
    <div className='container'>
      {component}
    </div>
    </>

  )
}

export default App;
