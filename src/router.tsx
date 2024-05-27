import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PaginaPrincipal from './views/PaginaPrincipal'
import Login from './views/Login'
import Preinscripciones from './views/Preinscripciones'
import Talleres from './views/Talleres'
import TallerCarpinteria from './views/Carpinteria'
import Graduaciones from './views/Graduaciones'
import Administrativos from './views/Administrativos'
import Panel from './admin/Panel'
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
                <Route element={<Graduaciones />} path='/clausura' />
                <Route element={<Administrativos />} path='/administrativos' />
                <Route element={<Panel />} path='/panel' />
            </Routes>
        </BrowserRouter>
    )
}