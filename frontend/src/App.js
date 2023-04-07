import {Routes, Route} from 'react-router-dom';
import Employees from './pages/Employees';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Employees />}></Route>
   </Routes>
  );
}

export default App;
