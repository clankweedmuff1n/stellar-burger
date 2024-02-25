import {useEffect} from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import {useDispatch, useSelector} from 'react-redux';
import {getIngredient} from '../../services/actions/burgerIngredientsAction';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {Route, Routes} from "react-router-dom";
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

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<PrivateRoute isAuth={!isAuth} to='/'><LoginPage/></PrivateRoute>}/>
            <Route path='/register' element={<PrivateRoute isAuth={!isAuth} to='/'><RegisterPage/></PrivateRoute>}/>
            <Route path='/forgot-password'
                   element={<PrivateRoute isAuth={!isAuth} to='/'><ForgottenPasswordPage/></PrivateRoute>}/>
            <Route path='/reset-password'
                   element={<PrivateRoute isAuth={resetEmailSent} to="/login"><ResetPasswordPage/></PrivateRoute>}/>
            <Route path='/profile' element={<PrivateRoute isAuth={isAuth} to='/login'><ProfilePage/></PrivateRoute>}/>
            <Route path='/ingredients/:id' element={<IngredientsPage/>}/>
        </Routes>
        /*<div className={`${styles.app} custom-scroll`}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <main className={styles.app__content}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </DndProvider>
        </div>*/
    );
}

export default App;

