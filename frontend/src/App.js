import {Routes, Route} from 'react-router-dom';
import Employees from './pages/Employees';
import './style/app.css'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Employees />}></Route>
   </Routes>
  );
}

export default App;
