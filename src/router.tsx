import {Route,Routes, BrowserRouter} from 'react-router-dom'
import PaginaPrincipal from './views/PaginaPrincipal'
export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<PaginaPrincipal/>} index path='/' />
        </Routes>
    </BrowserRouter>
    )
}