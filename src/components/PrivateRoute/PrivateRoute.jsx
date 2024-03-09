import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getToken} from "../../utils/cookie";

export default function PrivateRoute({ children, anonymous = false }) {
    const isLoggedIn = useSelector((store) => store.userReducer.isAuth);
    const location = useLocation();
    const from = location.state?.from || '/';
    const token = getToken("accessToken");
    // Если разрешен неавторизованный доступ, а пользователь авторизован...

    if (token && isLoggedIn === undefined) return <></>;
    if (!token && isLoggedIn === undefined) return <Navigate to="/login" state={{ from: location}}/>;

    if (anonymous && isLoggedIn) {
        // ...то отправляем его на предыдущую страницу
        return <Navigate to={ from } />;
    }

    // Если требуется авторизация, а пользователь не авторизован...
    if (!anonymous && !isLoggedIn) {
        // ...то отправляем его на страницу логин
        return <Navigate to="/login" state={{ from: location}}/>;
    }

    // Если все ок, то рендерим внутреннее содержимое
    return children;
}