import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Employees from './pages/Employees';
import './style/app.css'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/app' element={<Employees />}></Route>
   </Routes>
  );
}

export default App;
