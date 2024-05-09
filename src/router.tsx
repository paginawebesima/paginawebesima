import {Route,Routes, BrowserRouter} from 'react-router-dom'
import PaginaPrincipal from './views/PaginaPrincipal'
import Login from './views/Login'
import Preinscripciones from './views/Preinscripciones'
import Talleres from './views/Talleres'
import Graduaciones from './views/Graduaciones'
import Administrativos from './views/Administrativos'
export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<PaginaPrincipal/>} index path='/' />
            <Route element={<Login/>} path='/login'/>
            <Route element={<Preinscripciones/>} path='/preinscripciones'/>
            <Route element={<Talleres/>} path='/talleres'/>
            <Route element={<Graduaciones/>} path='/graduaciones'/>
            <Route element={<Administrativos/>} path='/administrativos'/>
        </Routes>
    </BrowserRouter>
    )
}