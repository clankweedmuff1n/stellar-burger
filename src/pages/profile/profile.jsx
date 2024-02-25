import {React, useState} from "react";
import {NavLink, useNavigate, useLocation, Outlet} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styles from './profile.module.css';
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {logoutUser, changeUserData} from "../../services/actions/userAction";
import AppHeader from "../../components/AppHeader/AppHeader";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useSelector((store) => store.userReducer);
    const [userData, setUserDate] = useState(user);
    const [input, setInput] = useState({name: false, email: false});
    const activeStyle = {color: "#f2f2f3",}

    function profileFormSubmit(e) {
        e.preventDefault();
        dispatch(changeUserData(userData));
    }

    function formOnReset() {
        setUserDate({name: user.name, email: user.email});
    }

    function fieldOnChange(e) {
        setUserDate({...userData, [e.target.name]: e.target.value})
    }

    function checkButton() {
        return JSON.stringify(user) === JSON.stringify(userData);
    }

    return (
        <>
            <AppHeader/>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.column__nav}>
                        <nav className={styles.nav}>
                            <NavLink
                                to='/profile'
                                className={`text text_type_main-medium text_color_inactive ${styles.link}`}
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                end
                            >
                                Профиль
                            </NavLink>
                            <NavLink
                                to='order-page'
                                className={`text text_type_main-medium text_color_inactive ${styles.link}`}
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                state={{order: true}}
                                end
                            >
                                История заказов
                            </NavLink>
                            <NavLink
                                onClick={() => dispatch(logoutUser(() => navigate('/login')))}
                                className={`text text_type_main-medium text_color_inactive ${styles.link}`}
                            >
                                Выход
                            </NavLink>
                        </nav>
                        <p className={`text text_type_main-default ${styles.text}`}>В&nbsp;этом разделе вы&nbsp;можете
                            изменить свои персональные
                            данные</p>
                    </div>
                    {location.state ? (
                        <Outlet/>
                    ) : (
                        <form className={styles.column__form} onSubmit={profileFormSubmit}>
                            <Input
                                icon='EditIcon'
                                placeholder="Имя"
                                name='name'
                                value={userData.name}
                                disabled={!input.name}
                                onChange={fieldOnChange}
                                onIconClick={() => setInput({...input, name: !input.name})}
                            />
                            <Input
                                icon="EditIcon"
                                name='email'
                                placeholder="Логин"
                                value={userData.email}
                                onChange={fieldOnChange}
                                disabled={!input.email}
                                onIconClick={() => setInput({...input, email: !input.email})}

                            />
                            <Input
                                icon='EditIcon'
                                placeholder="Пароль"
                                disabled
                                value='******'
                            />
                            <div className={styles.container__buttons}>
                                <Button
                                    type='secondary'
                                    size='medium'
                                    htmlType="button"
                                    onClick={formOnReset}
                                    disabled={checkButton()}
                                >Отмена</Button>
                                <Button
                                    type='primary'
                                    size='medium'
                                    htmlType="submit"
                                    disabled={checkButton()}
                                >Сохранить</Button>
                            </div>

                        </form>
                    )}
                </div>
            </section>
        </>
    )
};