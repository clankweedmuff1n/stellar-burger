import {useEffect} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getIngredient} from '../../services/actions/burgerIngredientsAction';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HomePage from "../../pages/main/main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ForgottenPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password-page";
import ProfilePage from "../../pages/profile/profile";
import IngredientsPage from "../../pages/ingredients/ingredients-page";
import {checkUserAccess} from "../../services/actions/userAction";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {RESET_CURRENT_INGREDIENT} from "../../services/actions/currentIngredientAction";
import FeedPage from "../../pages/feed/feed";
import OrderPage from "../../pages/order-page/order-page";
import BurgerDetails from "../BurgerDetails/BurgerDetails";
import UserOrder from "../../pages/user-order/user-order";

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIngredient());
        dispatch(checkUserAccess());
    }, [])

    const {isAuth, resetEmailSent} = useSelector((store) => ({
        isAuth: store.userReducer.isAuth,
        resetEmailSent: store.userReducer.resetEmailSent,
    }));

    let location = useLocation();

    const background =
        location.state?.locationIngredient ||
        location.state?.locationFeed ||
        location.state?.locationProfile ||
        location;

    function closeModal(e) {
        e.stopPropagation();
        navigate(-1);
        dispatch({type: RESET_CURRENT_INGREDIENT});
    }

    return (
        <>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path='/' element={<HomePage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/feed/:id" element={<OrderPage isAuth={isAuth}/>}/>
                <Route path="profile/orders/:id" element={<OrderPage isAuth={isAuth}/>}/>
                {!isAuth && <Route path='/login' element={<LoginPage/>}/>}
                {!isAuth && <Route path='/register' element={<RegisterPage/>}/>}
                {!isAuth && <Route path='/forgot-password' element={<ForgottenPasswordPage/>}/>}
                <Route path='/reset-password'
                       element={<PrivateRoute isAuth={resetEmailSent} to="/login"><ResetPasswordPage/></PrivateRoute>}/>
                <Route path='/profile'
                       element={<PrivateRoute to='/login'><ProfilePage/></PrivateRoute>}>
                    <Route path="orders" element={<UserOrder/>}/>
                </Route>
                <Route path='/ingredients/:id' element={<IngredientsPage/>}/>
            </Routes>
            {location.state?.locationIngredient && (
                <Routes>
                    <Route
                        path="/ingredients/:id"
                        element={
                            <Modal onCloseModal={closeModal}>
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
            {location.state?.locationFeed && (
                <Routes>
                    <Route
                        path="/feed/:id"
                        element={
                            <Modal onCloseModal={closeModal}>
                                <BurgerDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
            {location.state?.locationProfile && (
                <Routes>
                    <Route
                        path="/profile/orders/:id"
                        element={
                            <Modal onCloseModal={closeModal}>
                                <BurgerDetails/>
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </>
    );
}

export default App;

