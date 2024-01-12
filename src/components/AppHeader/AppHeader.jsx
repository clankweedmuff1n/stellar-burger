import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.header__navigation} pb-4 pt-4`}>
                <ul className={styles.header__list}>
                    <div className={styles.header__list_wrapper}>
                        <li className={styles.header__item}>
                            <a className={styles.header__link} href='#'>
                                <BurgerIcon type='primery'/>
                                <p className='text text_type_main-default pl-2'>Конструктор</p>
                            </a>
                        </li>
                        <li className={styles.header__item}>
                            <a className={styles.header__link} href='#'>
                                <ListIcon type='secondary'/>
                                <p className='text text_type_main_default text_color_inactive pl-2'>Лента заказов</p>
                            </a>
                        </li>
                    </div>
                    <li className={styles.header__item}>
                        <Logo/>
                    </li>
                    <div className={styles.header__list_wrapper}>
                        <li className={`${styles.header__item} pr-5`}>
                            <a className={styles.header__link} href='#'>
                                <ProfileIcon type='secondary'/>
                                <p className='text text_type_main_default text_color_inactive pl-2'>Личный кабинет</p>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;