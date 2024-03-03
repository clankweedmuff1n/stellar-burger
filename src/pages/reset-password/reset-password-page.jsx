import {Input, Button, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import {setResetPasswordFormValue, resetPassword} from "../../services/actions/userAction";

export default function ResetPasswordPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {resetPasswordForm} = useSelector((store) => store.userReducer);

    function fieldOnChange(e) {
        dispatch(setResetPasswordFormValue(e.target.name, e.target.value));
    }

    function resetFormSubmit(e) {
        e.preventDefault();
        dispatch(resetPassword(resetPasswordForm, () => navigate('/login')));
    }

    return (
        <section className="mt-[180px]">
            <div className="flex flex-col items-center">
                <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>

                <form className="flex flex-col items-center gap-[24px]" onSubmit={resetFormSubmit}>
                    <PasswordInput
                        placeholder='Введите новый пароль'
                        value={resetPasswordForm.password}
                        name='password'
                        onChange={fieldOnChange}
                    />
                    <Input
                        placeholder="Введите код из письма"
                        value={resetPasswordForm.token}
                        name='token'
                        type='text'
                        onChange={fieldOnChange}
                    />
                    <Button htmlType="submit" type="primary" size='medium'>Сохранить</Button>
                </form>
                <p className='text text_type_main-default'>Вспомнили пароль?
                    <Link to='/login' className="text-purple mt-[80px] ml-[8px] inline-block">Войти</Link>
                </p>
            </div>
        </section>
    )
}