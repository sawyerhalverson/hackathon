import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import './styles.css'


function App() {
  return (
    <NavBar/>
    // <div className="App">
    //   Hi
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Item/>}> </Route> 
    //       {/* replace Item with something else */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
