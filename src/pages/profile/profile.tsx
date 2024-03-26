import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
import {NavLink, useNavigate, useLocation, Outlet} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {logoutUser, changeUserData} from "../../services/actions/userAction";
import {AppDispatch, RootState} from "../../services/store";

export default function ProfilePage() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useSelector((store: RootState) => store.userReducer);
    const [userData, setUserDate] = useState(user);
    const [input, setInput] = useState({name: false, email: false});
    const activeStyle = {color: "#f2f2f3",}

    function profileFormSubmit(e: FormEvent<HTMLInputElement>) {
        e.preventDefault();
        dispatch(changeUserData(userData));
    }

    function formOnReset() {
        setUserDate({name: user.name, email: user.email});
    }

    function fieldOnChange(e: ChangeEvent<HTMLInputElement>) {
        setUserDate({...userData, [e.target.name]: e.target.value})
    }

    function checkButton() {
        return JSON.stringify(user) === JSON.stringify(userData);
    }

    // @ts-ignore
    return (
        <section className="mt-[120px]">
            <div className="flex m-auto max-w-[1280px] gap-[60px]">
                <div className="max-w-[320px] gap-[80px] flex flex-col">
                    <nav className="flex flex-col">
                        <NavLink
                            to='/profile'
                            className="text text_type_main-medium text_color_inactive flex min-h-[65px] items-center"
                            style={({isActive}) => (isActive ? activeStyle : undefined)}
                            end
                        >
                            Профиль
                        </NavLink>
                        <NavLink
                            to='order-page'
                            className="text text_type_main-medium text_color_inactive flex min-h-[65px] items-center"
                            style={({isActive}) => (isActive ? activeStyle : undefined)}
                            state={{order: true}}
                            end
                        >
                            История заказов
                        </NavLink>
                        <NavLink
                            onClick={() => dispatch(logoutUser(() => navigate('/login')))}
                            className="text text_type_main-medium text_color_inactive flex min-h-[65px] items-center"
                        >
                            Выход
                        </NavLink>
                    </nav>
                    <p className="text text_type_main-default opacity-[0.4] text-purple-light">В&nbsp;этом разделе
                        вы&nbsp;можете
                        изменить свои персональные
                        данные</p>
                </div>
                {location.state ? (
                    <Outlet/>
                ) : (
                    <form className="flex flex-col gap-[24px]" onSubmit={profileFormSubmit}>
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
                        <div className="flex flex-end">
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
    )
};