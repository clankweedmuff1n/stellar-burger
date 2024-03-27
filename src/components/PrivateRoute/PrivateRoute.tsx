import { Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";
import {getToken} from "../../utils/cookie";


interface IPrivateRoute {
    children: ReactNode;
    to: string;
    isAuth?: boolean;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children, to, isAuth }) => {
    if (isAuth === undefined && getToken("accessToken") !== undefined) return <></>;
    return <>{isAuth ? children : <Navigate to={to} replace/>}</>
};

export default PrivateRoute;