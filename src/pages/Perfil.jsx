import React from 'react'
import '../CSS/perfil.css';
export default function Perfil() {
  return (
    <div className='justify-items-start items-center w-[80vw]  h-[90vh] ml-50  '>
      <p  className='font-bold text-3xl '>Información de la cuenta </p>
      <div className='flex flex-row justify-between items-center  w-full  mt-5'>
        <p id='subtitulo' className='text-sm text-[#fffae97a]'>Actualiza tu información de cuenta</p>
        <button id='btnper'>Editar</button>
      </div>
      <p className='mt-3 font-bold text-2xl'>Información Personal</p>
      <div className='flex flex-rowm justify-start items-center  w-full  mt-5  gap-96'>
        <label id='subtitulo' className='mx-10 text-s  text-[#fffae97a]' htmlFor="FIRSTn">Primer Nombre</label>
        <label id='subtitulo' className='mx-10 text-s  text-[#fffae97a]' htmlFor="">Primer Apellido</label>
        </div>
        <div className='flex flex-rowm justify-start items-center  w-full  mt-5  gap-73'>
          <input className='mx-10 text-s border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000]' type="text" placeholder='Damaris' />
          <input className='mx-10 text-s border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000]' type="text" placeholder='Alvarado' />
        </div>

        <div className='flex flex-rowm justify-start items-center  w-full  mt-10  gap-79'>
        <label id='subtitulo' className='mx-10 text-s  text-[#fffae97a]' htmlFor="FIRSTn">Fecha de cumpleaños</label>
        <label id='subtitulo' className='mx-10 text-s  text-[#fffae97a]' htmlFor="">Número de celular</label>
        </div>
        <div className='flex flex-rowm justify-start items-center  w-full  mt-5  gap-85'>
          <input className='mx-10 text-s border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000]' type='date' />
          <input className='mx-10 text-s border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000]' type="tel" placeholder="Ej. 5551234567" pattern="[0-9]{10}"  />
        </div>

        <div className='flex flex-rowm justify-start items-center  w-full  mt-10  gap-79'>
        <label id='subtitulo' className='mx-10   text-[#fffae97a]' htmlFor="FIRSTn">Email</label>
        
        </div>
        <div className='flex flex-rowm justify-start items-center  w-full  mt-5  gap-85'>
          <input className='mx-10 w-[51rem]  border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000]  ' type='email' placeholder='damaris@gmail.com' />
           
        </div>

        <div className='flex flex-rowm justify-start items-center  w-full  mt-5 gap-102 '>
           <label id='subtitulo' className='mx-10  ' htmlFor="FIRSTn">Contraseña</label>
            <label id='subtitulo' className='mx-10 ' htmlFor="FIRSTn">Confirmar contraseña</label>
        </div>

        <div className='flex flex-rowm justify-start items-center  w-full  mt-5  gap-72'>
          <input className='mx-10  border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000] ' type='password' placeholder='******' />
          <input className='mx-10  border-2 border-[#fffae97a] rounded-md bg-[#fffae9a3] text-[#000000] ' type='password' placeholder='******' />
        </div>
        <div>
          <button id='btnper' className='mt-5 ml-10'>Actualizar</button>
        </div>
        
      </div>

  )
}
