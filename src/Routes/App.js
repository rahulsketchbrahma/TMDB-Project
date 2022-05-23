import '../App.css';
import Home from '../Container/Home/Index';
import FrontPage from '../Container/Frontpage/Index';
import Warning from '../Container/Warningpage/Index';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Moviedetails from '../Components/Moviedetails/Index';
import Search from '../Container/SearchPage/Index'
import SigninScreen from '../Container/SigninScreen/Index';
import SignupScreen from '../Container/SignupScreen/Index'
import Private from '../Private/Index';
import Public from '../Public/Index';




function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
  <Route path="/" element={ <Public component= {FrontPage} />} / >
  <Route path="/Home" element={<Private component={Home} />} />
  <Route path="/Warning" element={<Private component={Warning} />} />
  <Route path="/Moviedetails/:id" element={<Private component={Moviedetails} />}/>
  <Route path="/Search" element={<Private component={Search} />}/>
  <Route path="/SignIn" element={<Public component= {SigninScreen} />}/>
  <Route path="/SignUp" element={<Public component= {SignupScreen} />}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;