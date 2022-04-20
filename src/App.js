import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Array from './Pages/Array.js';
import DynamicProg from './Pages/DynamicProgramming.js';
function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/arrays' element = {<Array/>}></Route>
      <Route path="/dynamicProgramming" element = {<DynamicProg/>}></Route>
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
