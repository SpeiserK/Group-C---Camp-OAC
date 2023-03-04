// In ProtectedRoutes.js
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
    var auth = sessionStorage.getItem("auth");
    return (auth === "true" ? <Outlet /> : <Navigate to="/" replace/>)
}
export default ProtectedRoutes;