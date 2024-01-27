import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import './styles.css'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Profile from './pages/Profile';
import Rides from './pages/Rides';
import Map from './pages/Map';
import './index.css';


function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Profile />} /> {/* Updated route for Sign Up */}
        <Route path="/rides" element={<Rides />} />
        <Route path="/map" element={<Map />} />
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/create-profile/:type" element={<Profile />}></Route>

      </Routes>
    </div>
    </>

  )
}

export default App;
