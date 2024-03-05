import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useCallback} from 'react';
import {NavLink, useLocation} from "react-router-dom";

const AppHeader = () => {
    const activeStyle = {
        color: "#f2f2f3",
    }
    const {pathname} = useLocation();

    const toggleStyleIcon = useCallback(
        (url) => {
            if (pathname === '/' && url === '/') {
                return 'primary';
            } else {
                return 'secondary';
            }
        },
        [pathname]
    );
    return (
        <header className="flex flex-col bg-header-bg text-white justify-center h-[88px] max-w-[1920px] w-full mx-auto my-[40px]">
            <nav className="m-auto mt-0 bg-dark-bg max-w-[1280px] pb-4 pt-4">
                <ul className="list-none justify-between flex p-0 m-0">
                    <div className="flex">
                        <li className="flex justify-center pl-[20px]">
                            <NavLink
                                to='/'
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                className="text text_type_main-default text-purple-light rounded-modal cursor-pointer bg-transparent gap-2 flex-none flex no-underline !py-[16px] !px-[20px] hover:shadow-details-shadow">
                                <BurgerIcon type={toggleStyleIcon('/')}/>
                                <p className='text text_type_main-default pl-2'>Конструктор</p>
                            </NavLink>
                        </li>
                        <li className="justify-center flex pl-[20px]">
                            <NavLink
                                to='/feed'
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                className="text text_type_main-default text-purple-light rounded-modal cursor-pointer bg-transparent gap-2 flex-none flex no-underline !py-[16px] !px-[20px] hover:shadow-details-shadow">
                                <ListIcon type={toggleStyleIcon('/order-feed')}/>
                                <p className='text text_type_main_default text_color_inactive pl-2'>Лента заказов</p>
                            </NavLink>
                        </li>
                    </div>
                    <li className="justify-center flex pl-[20px]">
                        <NavLink
                            to='/'
                            className={`text text_type_main-default`}
                        >
                            <Logo/>
                        </NavLink>
                    </li>
                    <div className="flex flex-row">
                        <li className="justify-center flex pl-[20px] pr-5">
                            <NavLink
                                to='/profile'
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                className="text text_type_main-default text-purple-light rounded-modal cursor-pointer bg-transparent gap-2 flex-none flex no-underline !py-[16px] !px-[20px] hover:shadow-details-shadow !ml-[280px]">
                                <ProfileIcon type={toggleStyleIcon('/profile')}/>
                                <p className='text text_type_main_default text_color_inactive pl-2'>Личный кабинет</p>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;