import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      Hi
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Item/>}> </Route> 
          {/* replace Item with something else */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
