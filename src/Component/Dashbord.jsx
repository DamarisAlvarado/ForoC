import React from 'react';
import { Link , Outlet} from 'react-router-dom'; 
import '../CSS/Dash.css';


const Dashbord = () => {
  return (
    <div className="flex text-lg">
      <nav className=" bg-[#ea953f] w-48 h-screen p-4 flex flex-col gap-6 fixed left-0 top-0">
        <h3 className='m-5'>Bienvenido</h3>
        <p>Foro Debate</p>
        {/* ruta anidadas cin outlet  */}
        <Link className='font-bold ' to="perfil" >Perfil</Link>
        <Link to="contact">Foros</Link>
      </nav>
      <div id='digeneral' className='  flex-grow flex justify-center items-center'  >
       <Outlet />
      </div>
    </div>
  )
}

export default Dashbord;
