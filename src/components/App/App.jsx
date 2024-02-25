import {useEffect} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getIngredient} from '../../services/actions/burgerIngredientsAction';
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "../../pages/main/main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ForgottenPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password-page";
import ProfilePage from "../../pages/profile/profile";
import IngredientsPage from "../../pages/ingredients/ingredients-page";
import {checkUserAccess} from "../../services/actions/userAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredient());
        dispatch(checkUserAccess());
    }, [])

    const {isAuth, resetEmailSent} = useSelector((store) => ({
        isAuth: store.userReducer.isAuth,
        resetEmailSent: store.userReducer.resetEmailSent,
    }));

    let location = useLocation();

    let background = location.state && location.state.background;

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<PrivateRoute isAuth={!isAuth} to='/'><LoginPage/></PrivateRoute>}/>
                <Route path='/register' element={<PrivateRoute isAuth={!isAuth} to='/'><RegisterPage/></PrivateRoute>}/>
                <Route path='/forgot-password'
                       element={<PrivateRoute isAuth={!isAuth} to='/'><ForgottenPasswordPage/></PrivateRoute>}/>
                <Route path='/reset-password'
                       element={<PrivateRoute isAuth={resetEmailSent} to="/login"><ResetPasswordPage/></PrivateRoute>}/>
                <Route path='/profile'
                       element={<PrivateRoute isAuth={isAuth} to='/login'><ProfilePage/></PrivateRoute>}/>
                {background && <Route path="/ingredients/:id" element={<HomePage/>}/>}
                <Route path='/ingredients/:id' element={<IngredientsPage/>}/>
            </Routes>
        </>
    );
}

export default App;

