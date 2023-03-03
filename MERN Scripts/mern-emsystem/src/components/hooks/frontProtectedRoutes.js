import { Navigate, Outlet } from "react-router-dom";
const FrontProtectedRoutes = () => {
    var email = sessionStorage.getItem("email");
    return (email != null ? <Outlet /> : <Navigate to="/" replace/>)
}
export default FrontProtectedRoutes;