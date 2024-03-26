import HomePage from "../../pages/main/main";
import LoginPage from "../../pages/login/login";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import BurgerDetails from "../BurgerDetails/BurgerDetails";
import {getIngredient} from "../../services/actions/burgerIngredientsAction";
import RegisterPage from "../../pages/register/register";
import ForgottenPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password-page";
import ProfilePage from "../../pages/profile/profile";
import IngredientsPage from "../../pages/ingredients/ingredients-page";
import {checkUserAccess} from "../../services/actions/userAction";
import FeedPage from "../../pages/feed/feed";
import OrderPage from "../../pages/order-page/order-page";
import UserOrder from "../../pages/user-order/user-order";
import Modal from "../Modal/Modal";
import React, {useEffect, FC} from "react";
import Layout from "../../pages/Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {RESET_CURRENT_INGREDIENT} from "../../services/constants";
import {useDispatch, useSelector} from "../../services/hooks";


const App: FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIngredient());
        dispatch(checkUserAccess());
    }, []);

    const {isAuth, resetEmailSent} = useSelector((store) => ({
        isAuth: store.userReducer.isAuth,
        resetEmailSent: store.userReducer.resetEmailSent,
    }));

    function closeModal(e: React.MouseEvent<HTMLElement, MouseEvent> | KeyboardEvent) {
        e.stopPropagation();
        navigate(-1);
        dispatch({type: RESET_CURRENT_INGREDIENT});
    }


    const background =
        location.state?.locationIngredient ||
        location.state?.locationFeed ||
        location.state?.locationProfile ||
        location;

    return (
        <>
            <Routes location={background}>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/ingredients/:id" element={<IngredientsPage/>}/>
                    <Route path="/feed" element={<FeedPage/>}/>
                    <Route path="feed/:id" element={<OrderPage isAuth={false}/>}/>
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute isAuth={isAuth} to="/login">
                                <ProfilePage/>
                            </PrivateRoute>
                        }
                    >
                        <Route path="orders" element={<UserOrder/>}/></Route>
                    <Route
                        path="profile/orders/:id"
                        element={<OrderPage isAuth={true}/>}
                    />

                    <Route
                        path="/login"
                        element={
                            <PrivateRoute isAuth={!isAuth} to="/">
                                <LoginPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PrivateRoute isAuth={!isAuth} to="/">
                                <RegisterPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/forgot-password"
                        element={
                            <PrivateRoute isAuth={!isAuth} to="/">
                                <ForgottenPasswordPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/reset-password"
                        element={
                            <PrivateRoute isAuth={resetEmailSent} to="/login">
                                <ResetPasswordPage/>
                            </PrivateRoute>
                        }
                    />
                </Route>
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