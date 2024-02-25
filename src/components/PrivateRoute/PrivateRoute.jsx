import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, to, isAuth }) {
    return isAuth ? children : <Navigate to={to} replace/>;
}