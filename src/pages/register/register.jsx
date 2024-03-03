import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {Button, EmailInput, PasswordInput, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import {setRegisterFormValue, registerUser} from '../../services/actions/userAction';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {registerForm} = useSelector((store) => store.userReducer);

    function fieldOnChange(e) {
        dispatch(setRegisterFormValue(e.target.name, e.target.value));
    }

    function registerFormSubmit(e) {
        e.preventDefault();
        dispatch(registerUser(registerForm, () => navigate('/login')));
    }

    return (
        <section className="flex justify-center mt-[180px]">
            <div className="flex flex-col items-center">
                <p className='text text_type_main-medium mb-6'>Регистрация</p>
                <form className="flex gap-[24px] flex-col items-center" onSubmit={registerFormSubmit}>
                    <Input
                        placeholder='Имя'
                        type='text'
                        name='name'
                        value={registerForm.name}
                        onChange={fieldOnChange}
                    />
                    <EmailInput
                        value={registerForm.email}
                        name='email'
                        onChange={fieldOnChange}
                    />
                    <PasswordInput
                        value={registerForm.password}
                        name='password'
                        onChange={fieldOnChange}
                    />
                    <Button
                        htmlType='submit' type='primary' size='medium'
                    >Зарегистрироваться</Button>

                </form>
                <p className='text text_type_main-default'>
                    Уже зарегистрированы?
                    <Link to='/login' className="inline-block text-purple mt-[80px] ml-[8px]">Войти</Link>
                </p>
            </div>

        </section>
    );

}