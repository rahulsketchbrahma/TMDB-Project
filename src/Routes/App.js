import '../App.css';
import Home from '../Container/Home/Index';
import FrontPage from '../Container/Frontpage/Index';
import Warning from '../Container/Warningpage/Index';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Moviedetails from '../Components/Moviedetails/Index';



function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
  <Route path="/" element={<FrontPage />} />
  <Route path="/Home" element={<Home/>} />
  <Route path="/Warning" element={<Warning />} />
  <Route path="/Moviedetails/:id" element={<Moviedetails />}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;