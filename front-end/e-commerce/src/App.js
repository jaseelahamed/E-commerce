
import './App.css';
import './bootstrap.min.css'
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Main from './components/Main';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details'
import Addprodect from './components/Addprodect';
import Cart from './components/Cart';
import Hbar from './components/Hbar';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
        {/* <Routes>
        <Route  path='/' Component={Home}/>
        <Route  path='/reg' Component={Registration}/>
        <Route  path='/log' Component={Login}/>
      </Routes> */}
        <Router>
          <Hbar/>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="lg" element={<Login />} />
        <Route path="main" element={<Main />} />
        <Route path="Addp" element={<Addprodect />} />
        <Route path='/pd/:id' element={<Details/>}></Route>
        <Route  path='/cart/:id' Component={Cart}/>

      </Routes>
    
    </Router>
    </div>
  );
}

export default App;
