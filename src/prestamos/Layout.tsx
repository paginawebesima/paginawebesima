import { Link, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
export default function Layout() {
  return (
    <div>
        <header className="">
        <NavBar/>
        <div className="imagen4 clase1">
          <h1></h1>
          <h3 className="texto-principal">Prestamos</h3>
        </div>
      </header>
        <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <Outlet/>
        <Footer />
    </div>
  )
}
