import { Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";


interface IPrivateRoute {
    children: ReactNode;
    to: string;
    isAuth?: boolean;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children, to, isAuth }) => {
    return <>{isAuth ? children : <Navigate to={to} replace/>}</>
};

export default PrivateRoute;