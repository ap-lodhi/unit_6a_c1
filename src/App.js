import './App.css';
import Navbar from './Componets/Navbar';
import {Routes ,Route} from "react-router-dom";
import Home from './Componets/Home';
import Login from './Componets/Login';
import Appointment from './Componets/Appointment';
import Appointments from './Componets/Appointments';
import Add from './Componets/Add';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>}> </Route>
      <Route  path='/login' element={<Login/>}> </Route>
      <Route  path='/appointment' element={<Appointment/>}> </Route>
      <Route  path='/appointments' element={<Appointments/>}> </Route>
      <Route  path='/appointments:/add' element={<Add/>}> </Route>
    </Routes>
    </>
  );
}

export default App;
