// In ProtectedRoutes.js
import { Navigate, Outlet } from "react-router-dom";
const LocationProtectedRoutes = () => {
    
    var admin = sessionStorage.getItem("adminLocAccess");
    return (admin === "admin" ? <Outlet /> : <Navigate to="/login/emp" replace/>)
}
export default LocationProtectedRoutes;