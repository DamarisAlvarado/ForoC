import Login from './Component/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './Component/Dashbord';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />

      /** rutas anidadas */
      <Route path='/dashbord' element={<Dashbord/>}>
      <Route path='perfil' element={<Perfil/>}/>
      </Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
