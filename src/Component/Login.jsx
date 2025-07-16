import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Login = () => {

   const navigate = useNavigate();
  return (
     <div  className="flex flex-row justify-center items-center  bg-[#ea953f] border-3 shadow-lg shadow-amber-400/100 border-amber-100  rounded-4xl">
         <div className=" p-20 basis-[50%]  items-center  justify-center text-center m-5 ">
        <p id="principal" className=" text-5xl font-bold m-3">Login</p>
        <div className="flex flex-row justify-center">
          <input 
            className=" text-lg font-sans m-5 "
            placeholder="Usuario"
            type="text"
            name="usuario"
            id="usuario"
          />
          <FaUser className="m-5" />
        </div>

        <div className="flex flex-row justify-center ">
          <input
            className="text-lg font-sans m-5"
            type="text"
            name="contra"
            id="contra"
            placeholder="contraseña"
          />
          <FaUser className="m-5" />
        </div>
        <button 
        onClick={()=> navigate("/Dashbord")} id="btonLogin" className=" w-[70%] m-5  text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ">Login</button>
        <p  className=" m-5 text-md font-sans animate-bounce">
          ¿No tienes cuenta? <a className="text-amber-400 animate-bounce" href="">Registrar</a>
        </p>
      </div>

      <div className=" basis-[50%]  justify-center text-center  m-5 --20">
        <p id="principal"  className="  text-5xl font-bold m-5">¡Bienvenido <br/> Nuevamente!</p>
        <p   className="text-m m-5">
          Nos alegra tenerte con nosotros. <br /> Si necesitas ayuda, no dudes en comunicarte <br /> con nuestro equipo o participar en el foro.
        </p>
      </div>

      
    </div>
  );
};

export default Login;
