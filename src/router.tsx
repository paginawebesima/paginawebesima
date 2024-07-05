import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';
import PaginaPrincipal from './views/PaginaPrincipal';
import Preinscripciones from './views/Preinscripciones';
import Talleres from './views/Talleres';
import TallerCarpinteria from './views/talleres/Carpinteria';
import TallerOfimatica from './views/talleres/Ofimatica';
import TallerCocina from './views/talleres/Cocina';
import TallerElectronica from './views/talleres/Electronica';
import TallerMecanica from './views/talleres/Mecanica';
import TallerAutomotriz from './views/talleres/Automotriz';
import TallerDibujo from './views/talleres/Dibujo';
import TallerSoldadura from './views/talleres/Soldadura';
import TallerElectricidad from './views/talleres/Electricidad';
import Graduaciones from './views/Graduaciones';
import Administrativos from './views/Administrativos';
import Panel from './admin/Panel';
import OptionsPanel from './options/OptionsPanel';
import InformationContact from './options/InformationContact';
import EditarNuevoIngreso from './options/actualizacion/EditarNuevoIngreso';
import ActualizarInformacionNuevoIngreso from './options/actualizacion/ActualizarInformacionNuevoIngreso';
import OpcionesNuevoIngreso from './options/actualizacion/OpcionesNuevoIngreso';
import OpcionesTelefono from './options/actualizacion/OpcionesTelefono';
import InsertarRequerimientos from './components/InsertarRequerimientos';
import EliminarRequerimiento from './components/EliminarRequerimiento';
import ActualizarNumero from './options/Forms/ActualizarNumero';
import EditarNumeroDeTelefono from './options/Forms/EditarNumeroDeTelefono';
import EliminarNumeroTelefono from './options/Forms/EliminarNumeroTelefono';
import Register from './views/Register';
import Login from './views/Login';
import TokenView from './views/TokenView';
import RequestNewCodeView from './views/requestNewCodeView';
import ForgotPasswordView from './views/ForgotPasswordView';
import NewPasswordView from './views/NewPasswordView';
import PrestamosLibros from './prestamos/PrestamosLibros';
import CrearPrestamo from './prestamos/CrearPrestamo';
import ActualizarPrestamo from './prestamos/ActualizarPrestamo';
import GenerarPDF from './prestamos/GenerarPDF';
import BookLayout from './layout/BookLayout';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route element={<PaginaPrincipal />} index path="/" />
                    <Route element={<Preinscripciones />} path="/preinscripciones" />
                    <Route element={<Talleres />} path='/talleres' />
                    <Route element={<TallerCarpinteria />} path="/carpinteria" />
                    <Route element={<TallerOfimatica />} path="/ofimatica" />
                    <Route element={<TallerCocina />} path="/cocina" />
                    <Route element={<TallerElectronica />} path="/electronica" />
                    <Route element={<TallerMecanica />} path="/mecanica" />
                    <Route element={<TallerAutomotriz />} path="/automotriz" />
                    <Route element={<TallerDibujo />} path="/dibujo" />
                    <Route element={<TallerSoldadura />} path="/soldadura" />
                    <Route element={<TallerElectricidad />} path="/electricidad" />
                    <Route element={<Graduaciones />} path="/graduaciones" />
                    <Route element={<Administrativos />} path="/administrativos" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<TokenView />} path="/token" />
                    <Route element={<RequestNewCodeView />} path='/request-code' />
                    <Route element={<ForgotPasswordView />} path='/forgot-password' />
                    <Route element={<NewPasswordView />} path='/new-password' />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route element={<Register />} path="/register" />
                    <Route element={<Panel />} path="/panel">
                        <Route element={<OptionsPanel />} index />
                        <Route element={<OpcionesTelefono />} path="informacion" />
                        <Route element={<ActualizarNumero />} path="informacion/actualizar" />
                        <Route element={<EditarNumeroDeTelefono />} path="informacion/actualizar/:telefonoId/editar" />
                        <Route element={<EliminarNumeroTelefono />} path="informacion/eliminar" />
                        <Route element={<InformationContact />} path="informacion/telefono" />
                        <Route element={<OpcionesNuevoIngreso />} path="nuevoIngreso" />
                        <Route element={<ActualizarInformacionNuevoIngreso />} path="nuevoIngreso/actualizar" />
                        <Route element={<EditarNuevoIngreso />} path="nuevoIngreso/actualizar/:preinscripcionesId/editar" />
                        <Route element={<InsertarRequerimientos />} path="nuevoIngreso/añadir" />
                        <Route element={<EliminarRequerimiento />} path="nuevoIngreso/eliminar" />
                    </Route>
                </Route>

                <Route element={<BookLayout />}>
                    <Route element={<PrestamosLibros />} index path='/prestamos' />
                    <Route element={<CrearPrestamo />} path='/crearPrestamo' />
                    <Route element={<ActualizarPrestamo />} path='/actualizarPrestamo/:prestamoId/editar' />
                    <Route element={<GenerarPDF />} path='/documento' />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
