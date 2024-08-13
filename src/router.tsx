import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';
import PaginaPrincipal from './views/PaginaPrincipal';
import Preinscripciones from './views/Preinscripciones';
import Talleres from './views/Talleres';
import TallerCarpinteria from './views/talleres/Carpinteria';
import TallerAdministracionContable from './views/talleres/AdministracionContable';
import TallerCocina from './views/talleres/Cocina';
import TallerCorteYConfeccion from './views/talleres/CorteYConfeccion';
import TallerDiseñoTecnico from './views/talleres/DiseñoTecnico';
import TallerTurismo from './views/talleres/Turismo';
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
import Register from './views/usuarios/Register';
import Login from './views/Login';
import TokenView from './views/TokenView';
import RequestNewCodeView from './views/requestNewCodeView';
import ForgotPasswordView from './views/ForgotPasswordView';
import NewPasswordView from './views/NewPasswordView';
import PrestamosLibros from './prestamos/PrestamosLibros';
import CrearPrestamo from './prestamos/CrearPrestamo';
import ActualizarPrestamo from './prestamos/ActualizarPrestamo';
import PanelClausura from './views/clausura/PanelClausura';
import EliminarClausura from './views/clausura/EliminarClausura';
import ActualizarClausura from './views/clausura/ActualizarClausura';
import ActualizacionClausura from './views/clausura/ActualizacionClausura';
import Gestion from './views/gestionprestamos/Gestion';
import Prestamos_Vespertino from './views/gestionprestamos/Prestamos_Vespertino';
import Prestamo_Vespertino from './views/gestionprestamos/Prestamo_Vespertino';
import ActualizarPrestamoVespertino from './views/gestionprestamos/ActualizarPrestamoVespertino';
import Biblioteca from './views/Biblioteca';
import BookLayout from './layout/BookLayout';
import PanelAdministrativos from './views/Administrativos/PanelAdministrativos'; 
import ActualizacionAdministrativos from './views/Administrativos/ActualizacionAdministrativos';
import ActualizarAdministrativos from './views/Administrativos/ActualizarAdministrativos';
import EliminarAdministrativos from './views/Administrativos/EliminarAdministrativos';
import Usuarios from './views/usuarios/Usuarios';
import ActualizarUsuarios from './views/usuarios/ActualizarUsuarios';
import InventarioLibros from './views/gestionprestamos/inventario/Inventarios';
import CrearLibros from './views/gestionprestamos/inventario/CrearLibros';
import ActualizarLibros from './views/gestionprestamos/inventario/ActualizarLibros';
import Tareas from './views/tareas/Tareas';
import AgregarTareaModal from './views/tareas/AgregarTareaModal';
import Page404 from './404/Page404';
import GestionSalonBiblioteca from './views/gestionprestamos/GestionSalonBiblioteca';
import FormularioSalon from './views/gestionprestamos/FormularioSalon';
import ActualizarAdministracionData from './views/gestionprestamos/ActualizarAdministracionData';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route element={<PaginaPrincipal />} index path="/" />
                    <Route element={<Preinscripciones />} path="/preinscripciones" />
                    <Route element={<Biblioteca/>} path='/biblioteca'/>
                    <Route element={<Talleres />} path='/talleres' />
                    <Route element={<TallerCarpinteria />} path="/carpinteria" />
                    <Route element={<TallerAdministracionContable />} path="/administracion-contable" />
                    <Route element={<TallerCocina />} path="/cocina" />
                    <Route element={<TallerCorteYConfeccion />} path="/corte-y-confeccion" />
                    <Route element={<TallerDiseñoTecnico />} path="/diseño-tecnico" />
                    <Route element={<TallerTurismo />} path="/turismo" />
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
                    <Route element={<Usuarios />} path="/usuarios" />
                    <Route element={<Tareas />} path="/tareas" />
                    <Route element={<AgregarTareaModal />} path="/tareas/crearTareas" />
                    <Route element={<ActualizarUsuarios />} path="/actualizarUsuarios/:id" />
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
                        <Route element={<PanelClausura/>} path='clausura'/>
                        <Route element={<EliminarClausura/>} path='clausura/eliminar'/>
                        <Route element={<ActualizarClausura/>} path='clausura/actualizar'/>
                        <Route element={<ActualizacionClausura/>} path='clausura/actualizar/:clausuraId/editar'/>
                        <Route element={<PanelAdministrativos/>} path='administrativos'/>
                        <Route element={<EliminarAdministrativos/>} path='administrativos/eliminar'/>
                        <Route element={<ActualizarAdministrativos/>} path='administrativos/actualizar'/>
                        <Route element={<ActualizacionAdministrativos/>} path='administrativos/actualizar/:administrativosId/editar'/>
                    </Route>
                </Route>

                <Route path='/404' element={<Page404/>}/>
                <Route element={<BookLayout />}>
                    <Route element={<Gestion/>}index path='/prestamos'/>
                    <Route element={<PrestamosLibros />} path='/prestamos/matutino' />
                    <Route element={<Prestamos_Vespertino/>} path='/prestamos/vespertino'/>
                    <Route element={<CrearPrestamo />} path='/crearPrestamo' />
                    <Route element={<Prestamo_Vespertino/>} path='/crearPrestamoVespertino'/>
                    <Route element={<ActualizarPrestamo />} path='/actualizarPrestamo/:prestamoId/editar' />
                    <Route element={<ActualizarPrestamoVespertino/>} path='/actualizarPrestamoVespertino/:prestamoId/editar'/>
                    <Route element={<InventarioLibros />} path='/prestamos/inventario' />
                    <Route element={<CrearLibros />} path='/crearLibros' />
                    <Route element={<ActualizarLibros />} path='/actualizarLibros/:inventarioId/editar' />
                    <Route element={<GestionSalonBiblioteca/>} path='/prestamos/administracion'/>
                    <Route element={<FormularioSalon/>} path='/prestamos/crearAdministracion'/>
                    <Route element={<ActualizarAdministracionData/>} path='/prestamos/:prestamoSalonId/editar'/>
                </Route>
                <Route path='*' element={<Navigate to='/404'/>}/>
            </Routes>

        </BrowserRouter>
    );
}
