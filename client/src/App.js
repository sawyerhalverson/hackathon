import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import './styles.css'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';


function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
    </div>
    </>

  )
}

export default App;
