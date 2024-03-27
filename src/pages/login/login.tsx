import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {ChangeEvent, FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {setLoginFormValue, loginUser} from '../../services/actions/userAction';
import {useDispatch, useSelector} from "../../services/hooks";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loginForm} = useSelector((store) => store.userReducer);


    function fieldOnChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch(setLoginFormValue(e.target.name, e.target.value));
    }

    function loginFormSubmit(e: FormEvent) {
        e.preventDefault();
        dispatch(loginUser(loginForm, () => navigate('/')));
    }

    return (
        <section className="flex justify-center mt-[180px]">
            <div className="flex flex-col items-center">
                <p className='text text_type_main-medium mb-6'>Вход</p>
                <form className="flex flex-col items-center gap-6" onSubmit={loginFormSubmit}>
                    <EmailInput
                        value={loginForm.email}
                        name='email'
                        onChange={fieldOnChange}
                        autoComplete='email'
                    />
                    <PasswordInput
                        value={loginForm.password}
                        name='password'
                        onChange={fieldOnChange}
                        autoComplete='current-password'
                    />
                    <Button htmlType='submit' type='primary' size='medium'>Войти</Button>
                </form>
                <div className="flex flex-col items-center gap-4 mt-[80px]">
                    <p className='text text_type_main-default'>
                        Вы - новый пользователь?
                        <Link to='/register' className="ml-[8px] inline-block text-purple">Зарегистрироваться</Link>
                    </p>
                    <p className='text text_type_main-default'>
                        Забыли пароль?
                        <Link to='/forgot-password' className="ml-[8px] inline-block text-purple">Восстановить
                            пароль</Link>
                    </p>
                </div>
            </div>

        </section>
    )
}