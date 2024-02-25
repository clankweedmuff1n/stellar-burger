import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useCallback} from 'react';
import styles from './AppHeader.module.css';
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
        <header className={styles.header}>
            <nav className={`${styles.header__navigation} pb-4 pt-4`}>
                <ul className={styles.header__list}>
                    <div className={styles.header__list_wrapper}>
                        <li className={styles.header__item}>
                            <NavLink
                                to='/'
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                className={`text text_type_main-default ${styles.button}`}>
                                <BurgerIcon type={toggleStyleIcon('/')}/>
                                <p className='text text_type_main-default pl-2'>Конструктор</p>
                            </NavLink>
                        </li>
                        <li className={styles.header__item}>
                            <NavLink
                                to='/order-feed'
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                className={`text text_type_main-default ${styles.button}`}
                            >
                                <ListIcon type={toggleStyleIcon('/order-feed')}/>
                                <p className='text text_type_main_default text_color_inactive pl-2'>Лента заказов</p>
                            </NavLink>
                        </li>
                    </div>
                    <li className={styles.header__item}>
                        <NavLink
                            to='/'
                            className={`text text_type_main-default`}
                        >
                            <Logo/>
                        </NavLink>
                    </li>
                    <div className={styles.header__list_wrapper}>
                        <li className={`${styles.header__item} pr-5`}>
                            <NavLink
                                to='/profile'
                                style={({isActive}) => (isActive ? activeStyle : undefined)}
                                className={`text text_type_main-default ${styles.button} ${styles.button_profile} `}>
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