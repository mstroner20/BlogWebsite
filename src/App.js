import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/"></Route>
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
