import { useQuery } from "react-query";
import { Menu, MenuButton, Transition } from '@headlessui/react'

import 'react-toastify/ReactToastify.css'
import { requerimientosPreinscripciones } from "../../api/api";
import { Link } from "react-router-dom";
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Fragment } from "react/jsx-runtime";

export default function ActualizarInformacionNuevoIngreso() {
  const {data} = useQuery({
    queryKey:['preinscripciones'],
    queryFn:requerimientosPreinscripciones
  })
  
  if(data) return (
    <>
      <main>
        <div className="informacion_inscripciones">
          {data.map((informacion:{
            _id:string,
            titulo:string,
            requerimiento1:string,
            requerimiento2:string,
            requerimiento3:string,
            requerimiento4:string,
            requerimiento5:string
          })=>(

          <div className="informacion margen separacion_arriba">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src='/examen.svg' alt="Papeleria" />
            </div>
            <div className="informacion_contenido">

            <h2 className="papeleria titulo_papeleria">{informacion.titulo}</h2>
            <div className="informacion_contenido_papeleria">
              <p>{informacion.requerimiento1}</p>
              <p>{informacion.requerimiento2}</p>
              <p>{informacion.requerimiento3}</p>
              <p>{informacion.requerimiento4}</p>
              <p>{informacion.requerimiento5}</p>
            </div>
            </div>
            <Menu as='div' className='menu'>
              <MenuButton className='-m-2\.5 block p-2\.5'>
                <span className="sr-only">Opciones</span>
                <EllipsisVerticalIcon className="h-9 w-9" aria-hidden='true'/>
              </MenuButton>
              <Transition as={Fragment} enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items className='absolute z-10 w-56  rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                <Menu.Item>
                  <Link to={`/panel/nuevoIngreso/actualizar/${informacion._id}/editar`}>Editar</Link>
                </Menu.Item>
              </Menu.Items>
              </Transition>
            </Menu>
          </div>
          ))}
          
        </div>
      </main>
      
    </>
  )
}
