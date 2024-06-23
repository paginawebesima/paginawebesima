import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function PublicLayout() {
   
    return (
        <>
        <div>
            <div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>

        <ToastContainer
            pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        </>
    );
}