import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PaginaPrincipal from './views/PaginaPrincipal'
import Login from './views/Login'
import Preinscripciones from './views/Preinscripciones'
import Talleres from './views/Talleres'
import TallerCarpinteria from './views/Carpinteria'
import Graduaciones from './views/Graduaciones'
import Administrativos from './views/Administrativos'
import Panel from './admin/Panel'
import OptionsPanel from './options/OptionsPanel'
import InformationContact from './options/InformationContact'
import EditarNuevoIngreso from './options/actualizacion/EditarNuevoIngreso'
import ActualizarInformacionNuevoIngreso from './options/actualizacion/ActualizarInformacionNuevoIngreso'
import OpcionesNuevoIngreso from './options/actualizacion/OpcionesNuevoIngreso'
import OpcionesTelefono from './options/actualizacion/OpcionesTelefono'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PaginaPrincipal />} index path='/' />
                <Route element={<Login />} path='/login' />
                <Route element={<Preinscripciones />} path='/preinscripciones' />
                <Route element={<Talleres />} path='/talleres' />
                <Route element={<TallerCarpinteria />} path='/carpinteria' />
                <Route element={<Graduaciones />} path='/graduaciones' />
                <Route element={<Administrativos />} path='/administrativos' />
            </Routes>
            <Routes>
                <Route element={<Panel />}>
                    <Route element={<OptionsPanel />} index path='/panel' />
                    <Route element={<OpcionesTelefono />} path='/panel/informacion' />
                    <Route element={<InformationContact />} path='/panel/informacion/telefono' />
                    <Route element={<OpcionesNuevoIngreso />} path='/panel/nuevoIngreso' />
                    <Route element={<ActualizarInformacionNuevoIngreso />} path='/panel/nuevoIngreso/actualizar' />
                    <Route element={<EditarNuevoIngreso />} path='/panel/nuevoIngreso/actualizar/:preinscripcionesId/editar' />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}