import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute() {

    if (!Cookies.get('token')) return <Navigate to={'/login'} replace />

    return <Outlet />
}